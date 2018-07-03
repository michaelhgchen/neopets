const URL = 'http://www.neopets.com/water/fishing.phtml';

module.exports = async function underwaterFishing(page) {
  await page.goto(URL);

  await Promise.all([
    page.waitForNavigation(),
    page.click('input[value^="Reel"]'),
  ]);

  return page;
}
