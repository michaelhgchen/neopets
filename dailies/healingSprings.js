const URL = 'http://www.neopets.com/faerieland/springs.phtml';

module.exports = async function healingSprings(page) {
  await page.goto(URL);

  await Promise.all([
    page.waitForNavigation(),
    page.click('input[value^="Heal"]'),
  ]);

  return page;
}
