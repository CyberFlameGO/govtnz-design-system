// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '@govtnz/ds/build/css/H2.css';
import components__Headings from '../../commons/examples/components__Headings';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><p>Headings are structural parts of your page, ranging from 1 (most important) to 6 (least important), and are used by screen readers to understand the relationship between parts of your page. They are for headings, but they also denote the hierarchy of your page.</p>
<p>There are the conventional <Link to="/components/H1/">H1</Link>, <Link to="/components/H2/">H2</Link>, <Link to="/components/H3/">H3</Link>, <Link to="/components/H4/">H4</Link>, <Link to="/components/H5/">H5</Link>, and <Link to="/components/H6/">H6</Link>. Before headings you may optionally use Captions such as <Link to="/components/CaptionXl/">Caption XL</Link>, <Link to="/components/CaptionL/">Caption L</Link>, and <Link to="/components/CaptionM/">Caption M</Link>.</p>
<H2 {...onChangeGenerator(H2)} styleSize="large" id="how-to-use">How to use</H2>
<p>First choose a heading level based on the structure of your page, and then choose the appropriate font size for your design as the font size can be chosen independently, but do not conflate these decisions as they are strictly unrelated.</p>
<p>All these heading elements support sizes, either as classes of &quot;g-heading-xl&quot;, &quot;g-heading-l&quot;, &quot;g-heading-m&quot;, and &quot;g-heading-s&quot;, or their equivalent template variable.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Example of Headings</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Headings[0]} iframeProps={{id:"iframe_componentsHeadings0", className: "example__iframe", id: "iframe_componentsHeadings0", src:"../Headings__example0/", title:"Example of Headings" }}></Example>
</ExampleContainer>

<h2 id="captions-before-headings">Captions before headings</h2>
<p>Captions can be either <em>before</em> or <em>inside</em> headings.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Example of before headings</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Headings[1]} iframeProps={{id:"iframe_componentsHeadings1", className: "example__iframe", id: "iframe_componentsHeadings1", src:"../Headings__example1/", title:"Example of before headings" }}></Example>
</ExampleContainer>

<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Example of caption inside heading</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Headings[2]} iframeProps={{id:"iframe_componentsHeadings2", className: "example__iframe", id: "iframe_componentsHeadings2", src:"../Headings__example2/", title:"Example of caption inside heading" }}></Example>
</ExampleContainer>

<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
<ExampleHeading {...onChangeGenerator(ExampleHeading)}>Example of Paragraph Sizes</ExampleHeading>
<Example {...onChangeGenerator(Example)} code={components__Headings[3]} iframeProps={{id:"iframe_componentsHeadings3", className: "example__iframe", id: "iframe_componentsHeadings3", src:"../Headings__example3/", title:"Example of Paragraph Sizes" }}></Example>
</ExampleContainer>

<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Headings"}
      id={"Headings"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
