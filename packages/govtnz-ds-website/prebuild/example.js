const path = require('path');
const fs = require('fs');
const { pick, uniq, clamp } = require('lodash');
const acorn = require('acorn');
const acornJSX = require('acorn-jsx');
const mkdirp = require('mkdirp');
const webpack = require('webpack');
const puppeteer = require('puppeteer');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const {
  autogeneratedFileSignature,
  insertTemplate,
  pageContentComponentSignature,
} = require('./utils');

const writeExamplePage = async (
  exampleRelativePagePath,
  exampleData,
  title,
  id,
  parentUrl,
  linkBackPageName
) => {
  // This writes an example HTML file so that we can iframe it.
  //
  // Back story for why we're doing this:
  //
  // The Design System site has a very specific and Niche Requirement[tm]:
  //
  //   We want to have examples that use the DS components without
  //   theming, but we also want to use DS components with theming on
  //   the website, and they should all use the same className so that
  //   we are 'dogfooding' the DS.
  //
  // Unfortunately Gatsby has an 'optimisation' which means it may
  // preload CSS from other pages, even if those pages couldn't possibly
  // be browsed to from the current page.
  //
  // It's not Gatsby's fault that it can't detect whether a page is
  // potentially navigable from another page because that's a very hard
  // problem (it might even be impossible -- hrefs could be computed in
  // arbitrary ways), so we're stuck with their naive optimisation that
  // can preload CSS from any other page.
  //
  // Normally this problem is solved in Gatsby by using distinct CSS
  // classes for different components:
  // See https://github.com/gatsbyjs/gatsby/issues/3446
  // so that it doesn't matter if load CSS from different pages.
  //
  // However that would conflict with our Niche Requirement[tm]:
  //
  //   We want to have examples that use the DS components without
  //   theming, but we also want to use DS components with theming on
  //   the website, and they should all use the same className so that
  //   we are 'dogfooding' the DS.
  //
  // So what can we do to solve this?
  //
  // Well it's very complicated, but it seems to be necessary.
  //
  // We build HTML and JS files for every example and put that under the
  // "/static/" directory so that it's copied into "/public/" as-is.
  // Every example could involve multiple components etc., that means
  // every example needs bundling to resolve imports and stuff like that.
  // That means we need Webpack builds for each example.
  //
  // So that's what we're doing here

  const tsxTemplatePath = path.resolve(
    __dirname,
    '..',
    'src/commons/templates/example-iframe.tsx'
  );

  // because we have these in the template already
  const ComponentIdsThatDontNeedImports = [
    'Example',
    'ExampleSection',
    'ComponentCode',
    'ExampleContainer',
  ];

  const tsxTemplate = await fs.promises.readFile(tsxTemplatePath, {
    encoding: 'utf-8',
  });
  const tagNames = exampleData.match(/<([a-zA-Z0-9]+)/g);
  const reactComponentNames =
    tagNames &&
    tagNames
      .map(tag => tag.replace(/^</gi, ''))
      .filter(tag => {
        // All React components in our DS have a capital letter in their name
        return !!tag.match(/[A-Z]/);
      })
      .filter(tag => ComponentIdsThatDontNeedImports.indexOf(tag) === -1);

  const scriptImports = uniq(reactComponentNames).map(
    reactComponentName =>
      `import ${reactComponentName} from '@govtnz/ds/build/react-ts/${reactComponentName}.tsx';`
  );

  const example = await addOnStateChanged(exampleData);

  const WARNING = `${autogeneratedFileSignature}\n// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!\n\n`;
  const page =
    WARNING +
    insertTemplate(
      tsxTemplate,
      {
        id,
        title,
        parentUrl,
      },
      scriptImports.join('')
    ).replace(
      pageContentComponentSignature,
      `var PageContent = (props) => (${example});`
    );

  const tsxRelativePath = `${exampleRelativePagePath}.tsx`;
  const tsxFullPath = path.resolve(__dirname, '..', 'static', tsxRelativePath);
  const tsxFullDirectory = tsxFullPath.substring(
    0,
    tsxFullPath.length - path.basename(tsxFullPath).length
  );
  mkdirp.sync(tsxFullDirectory);

  const webRenderSuffix = `
      const onChangeGenerator = (props) => {
        // See onChangeGenerator insertion docs.
        // We can't know if a component takes props
        // of 'value' and 'onChange' so we insert some
        // and if they're not used that's ok.
        // The reason why we have 3 is because that's the
        // most number of inputs in a DS components, and it's 
        // simpler to just make 3.
  
        const [value, setValue] = useState(props && props.value);
        const [value2, setValue2] = useState(props && props.value2);
        const [value3, setValue3] = useState(props && props.value3);
      
        return {
          value,
          value2,
          value3,
          onChange: e => setValue(e.target.value),
          onChange2: e => setValue2(e.target.value),
          onChange3: e => setValue3(e.target.value),
        };
      };
    
      document.addEventListener('DOMContentLoaded', () => {
        const selector = '#root';
        const root = document.querySelector(selector);
        if (!root) {
          console.error("Couldn't find app mount point ", selector);
          return;
        }
        ReactDOM.hydrate(<PageContent />, root, window.afterRender);
      });
      `;

  await fs.promises.writeFile(tsxFullPath, page + webRenderSuffix, {
    encoding: 'utf-8',
  });

  const jsRelativePath = `${exampleRelativePagePath}.js`;
  const jsFullPath = path.resolve(__dirname, '..', 'static', jsRelativePath);
  const jsFullDirectory = jsFullPath.substring(
    0,
    jsFullPath.length - path.basename(jsFullPath).length
  );
  const jsFilename = path.basename(jsFullPath);

  const babelConfig = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  };

  const webpackConfig = {
    entry: tsxFullPath,
    output: { path: jsFullDirectory, filename: jsFilename },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: babelConfig,
            },
          ],
        },
      ],
    },
    externals: {
      // Use external version of React/ReactDOM so that every bundle
      // doesn't include it's own copy because that would be
      // very big bundle
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  };

  await new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        reject(err);
        console.error(err);
        throw Error(err);
      } else {
        resolve(stats);
      }
    });
  });

  const htmlTemplatePath = path.resolve(
    __dirname,
    '..',
    'src/commons/templates/example-iframe.html'
  );

  const htmlTemplate = await fs.promises.readFile(htmlTemplatePath, {
    encoding: 'utf-8',
  });

  const scriptUrl = `./${path.basename(jsFullPath)}`;

  const cssImports = uniq(reactComponentNames)
    .map(
      cssFileName => `<link rel="stylesheet" href="../css/${cssFileName}.css">`
    )
    .join('');

  const cssDirectoryPath = path.resolve(__dirname, '..', 'static', 'css');
  mkdirp.sync(cssDirectoryPath);
  await Promise.all(
    uniq(reactComponentNames).map(cssFileName =>
      fs.promises.copyFile(
        path.resolve(
          __dirname,
          '../..',
          'govtnz-ds/build/css',
          `${cssFileName}.css`
        ),
        path.resolve(__dirname, '..', 'static/css', `${cssFileName}.css`)
      )
    )
  );

  const serverRender = `
      const onChangeGenerator = () => ({});
      ${page};
      export default PageContent;
  `;

  const tmpDir = path.resolve(__dirname, '..', '.tmp');
  const tmpFile = path.basename(tsxFullPath);
  await mkdirp(tmpDir);
  const tmpPath = path.join(tmpDir, tmpFile);
  const tmpTargetFile = tmpFile + '.js';
  await fs.promises.writeFile(tmpPath, serverRender, {
    encoding: 'utf-8',
  });

  const webpackForServerConfig = {
    entry: tmpPath,
    output: { path: tmpDir, filename: tmpTargetFile, libraryTarget: 'umd' },
    mode: 'development',
    target: 'node',
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                ...babelConfig,
              },
            },
          ],
        },
      ],
    },
  };

  await new Promise((resolve, reject) => {
    webpack(webpackForServerConfig, (err, stats) => {
      if (err) {
        reject(err);
        console.error(err);
        throw Error(err);
      } else {
        resolve(stats);
      }
    });
  });

  const requirePath = path.join(tmpDir, tmpTargetFile);

  const thisExample = require(requirePath);

  const serverExampleHTML = ReactDOMServer.renderToString(
    React.createElement(thisExample.default)
  );

  const html = insertTemplate(htmlTemplate, {
    id,
    title,
    parentUrl,
    scriptUrl,
    serverExampleHTML,
    linkBackPageName,
  }).replace('@css', cssImports);

  const htmlRelativePath = `${exampleRelativePagePath}.html`;
  const htmlFullPath = path.resolve(
    __dirname,
    '..',
    'static',
    htmlRelativePath
  );

  await fs.promises.writeFile(htmlFullPath, html, { encoding: 'utf-8' });
  return htmlRelativePath;
};

const addOnStateChanged = async html => {
  // React Managed Components (as distinct from
  // unmanaged components) need a way to set a value
  // and have an onChange handler, but we don't want
  // that state inside the component itself (because
  // who knows if most people would use local component
  // state, or Redux, etc.), so we attach a basic wrapper
  // on all DS components
  //
  // React components have a capital letter in their nodeName
  // https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized
  //
  // so we attach a state manager to ALL react components
  // because if they don't use the props then it's harmless
  // and inspecting components would be more complicated

  wrappedHTML = `<>${html}</>`;
  const ast = acorn.Parser.extend(acornJSX()).parse(wrappedHTML);

  const walk = node => {
    let newHTML = '';

    switch (node.type) {
      case 'JSXElement': {
        const elementName = node.openingElement.name.name;
        newHTML += `<${elementName}`;
        const attrObj = {};
        if (node.openingElement.attributes) {
          newHTML += node.openingElement.attributes
            .map(attr => {
              let attrString = ` ${attr.name.name}`;
              let attrValue;
              if (attr.value && attr.value.type) {
                attrString += '=';
                switch (attr.value && attr.value.type) {
                  case 'Literal': {
                    attrString += attr.value.raw;
                    attrValue = attr.value.value;
                    break;
                  }
                  case 'JSXExpressionContainer': {
                    attrString += wrappedHTML
                      .substring(attr.start, attr.end)
                      .substring(attr.name.name.length + 1);

                    attrValue = wrappedHTML
                      .substring(attr.start, attr.end)
                      .substring(attr.name.name.length + 1)
                      .trim()
                      .replace(/^{/, '')
                      .replace(/}$/, '');
                    break;
                  }
                  default: {
                    console.log({ type: attr.value.type });
                    process.exit();
                    break;
                  }
                }
              } else {
                attrValue = true;
              }
              attrObj[attr.name.name] = attrValue;
              return attrString;
            })
            .join('');
        }
        if (elementName.match(/[A-Z]/)) {
          // if it's a React element and not an HTML element
          // then we will need to attach a state manager
          newHTML += ` {...onChangeGenerator(${JSON.stringify(
            pick(attrObj, 'value', 'value2', 'value3') // provide default values to useState()
          )})}`;
        }
        newHTML += '>';
        newHTML += node.children && node.children.map(walk).join('');
        newHTML += `</${elementName}>`;
        break;
      }
      case 'JSXText': {
        newHTML += node.raw;
        break;
      }
      default: {
        console.log('Unknown JSX node type', node.type);
        console.log(JSON.stringify(node));
        process.exit();
        break;
      }
    }

    return newHTML;
  };

  const newHTML = ast.body[0].expression.children.map(walk).join('');

  return newHTML;
};

const getExampleHeight = async srcPath => {
  // This function starts up Chromium and measures the
  // height of examples so that the <iframe> can be given
  // a specific height, and this is done to reduce onscreen jank.
  //
  // Note that this involves reading files from /public/
  // which will be the previous build so it won't pick up any
  // recent changes. So the determined height will always be
  // one build behind (N - 1) however this is considered
  // acceptable because:
  //
  //    1) there's JavaScript to resize the iframe anyway, so this
  //       initial value isn't particularly important other than to
  //       minimise jank;
  //    2) the alternative before this was a default size of 100px
  //       in all cases which was considered worse, so this is
  //       considered an improvement.
  //
  //  ...but feel free to somehow build the site, calculate example
  //  heights, and then update sizes in the pages, and then build the
  //  site again with those sizes, if an N-1 size is too out-of-sync
  //  for you.
  //
  // ERROR YOU CAN IGNORE:
  // If Chrome writes,
  //    Possible EventEmitter memory leak detected. 11 exit listeners added. Use emitter.setMaxListeners() to increase limit
  // then you can ignore that. It's from Chrome and it's just a possible
  // error and afaik we're doing everything correctly.

  let height = 200;
  const npmProjectPath = path.resolve(__dirname, '..');

  const fullFilePath = path.join(npmProjectPath, 'public', srcPath);

  if (!fs.existsSync(fullFilePath)) {
    console.error(
      `Example file doesn't exist at `,
      fullFilePath,
      ' from ',
      srcPath,
      ' This might be expected if this is a new example, and re-running this after a `yarn build` should make this error go away.'
    );
    return height;
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const fileUri = `file://${fullFilePath}`;

  try {
    await page.goto(fileUri, { waitUntil: 'load' });
  } catch (e) {
    console.error(
      'Problem calculating height of example at ',
      fileUri,
      ' This might be expected if this is a new example, and re-running this after a `yarn build` should make this error go away.',
      e
    );
  }

  // Ensure this element which is only displayed when viewing the iframe
  // directly doesn't affect the height of the page.
  await page.$eval('#iframed-message', element =>
    element.parentNode.removeChild(element)
  );

  const newHeight = await page.$eval('#root', element => element.offsetHeight);

  if (
    newHeight.toString().length > 0 &&
    newHeight.toString().replace(/[0-9]/gi, '').length === 0 // if it is entirely a number
  ) {
    height = clamp(parseFloat(newHeight.toString()), 50, 10000);
  } else {
    const errorMessage = `Unable to retrieve iframe height :( . Was given ${newHeight}`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  await browser.close();
  return height;
};

module.exports.addOnStateChanged = addOnStateChanged;
module.exports.writeExamplePage = writeExamplePage;
module.exports.getExampleHeight = getExampleHeight;