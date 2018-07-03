const URL = 'http://www.neopets.com/desert/fruit/index.phtml';

module.exports = async function fruitMachine(page) {
  await page.goto(URL);

  await Promise.all([
    page.waitForNavigation(),
    page.click('input[value^="Spin"]'),
  ]);

  return page;
}
