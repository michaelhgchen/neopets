const URL = 'http://www.neopets.com/faerieland/tdmbgpop.phtml';

module.exports = async function tdmbgpop(page) {
  await page.goto(URL);

  await Promise.all([
    page.waitForNavigation(),
    page.click('input[value^="Talk"]'),
  ]);

  return page;
}
