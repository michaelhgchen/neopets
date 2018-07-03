const URL = 'http://www.neopets.com/desert/shrine.phtml';

module.exports = async function coltzansShrine(page) {
  await page.goto(URL);

  await Promise.all([
    page.waitForNavigation(),
    page.click('input[value^="Approach"]'),
  ]);

  return page;
}
