const URL = 'http://www.neopets.com/halloween/strtest/index.phtml';

module.exports = async function testYourStrength(page) {
  await page.goto(URL);

  // TODO: Flash?!

  return page;
}
