const { clickAndWait } = require('../utilities');

module.exports = async function healingSprings(page) {
  await page.goto('http://www.neopets.com/faerieland/springs.phtml');
  await clickAndWait(page, 'input[value^="Heal"]');
  return page;
};
