const { clickAndWait } = require('../utilities');

module.exports = async function coltzansShrine(page) {
  await page.goto('http://www.neopets.com/desert/shrine.phtml');
  await clickAndWait(page, 'input[value^="Approach"]');
  return page;
};
