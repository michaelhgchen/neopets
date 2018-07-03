const URL = 'http://www.neopets.com/pirates/buriedtreasure/index.phtml';

module.exports = async function buriedTreasure(page) {
  await page.goto(URL);

  await Promise.all([
    page.waitForNavigation(),
    page.click('input[value^="Click"]'),
  ]);

  await Promise.all([
    page.waitForNavigation(),
    page.click('a[href="buriedtreasure.phtml"]'),
  ]);

  return page;
}
