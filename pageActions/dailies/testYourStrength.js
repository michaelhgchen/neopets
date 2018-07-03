module.exports = async function testYourStrength(page) {
  await page.goto('http://www.neopets.com/halloween/strtest/index.phtml');
  // TODO: Flash?!
  return page;
};
