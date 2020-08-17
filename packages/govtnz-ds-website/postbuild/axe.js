const { AxePuppeteer } = require('axe-puppeteer');
const puppeteer = require('puppeteer');
const { Pretty } = require('pretty3');

const routesToTest = [
  '/',
  '/basics/',
  '/components/',
  '/components/FlexGrid/',
  '/prototypes/',
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let hasAnyErrors = false;

  for (let i = 0; i < routesToTest.length; i++) {
    if ((await axeCheckRoute(page, routesToTest[i])) === false) {
      hasAnyErrors = true;
    }
  }

  await page.close();
  await browser.close();

  if (hasAnyErrors) {
    console.log(`Axe test failure :(`);
  } else {
    console.log(`Axe test success! No serious errors :)`);
  }

  process.exit(hasAnyErrors ? 1 : 0);
})();

async function axeCheckRoute(page, route) {
  await page.goto(`http://localhost:9000${route}`, {
    waitUntil: 'networkidle0',
  });

  const results = await new AxePuppeteer(page).analyze();
  const { violations } = results;
  const seriousViolations = violations.filter(
    (violation) => violation.impact === 'serious'
  );
  const otherViolations = violations.filter(
    (violation) => violation.impact !== 'serious'
  );

  if (seriousViolations.length === 0) {
    console.log(
      `Axe test route ${route}: 0 serious violations. ${otherViolations.length} other non-serious violations.`
    );
    return true;
  }

  console.log(Pretty.print(seriousViolations));
  console.log(
    `Axe test route ${route}: ${seriousViolations.length} serious violations. ${otherViolations.length} other non-serious violations.`
  );

  return false;
}
