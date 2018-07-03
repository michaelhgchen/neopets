const { clickAndWait } = require('../utilities');

module.exports = async function underwaterFishing(page) {
  await page.goto('http://www.neopets.com/water/fishing.phtml');
  await clickAndWait(page, 'input[value^="Reel"]');
  return page;
};
