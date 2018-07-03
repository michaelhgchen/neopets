const { clickAndWait } = require('../utilities');

module.exports = async function fruitMachine(page) {
  await page.goto('http://www.neopets.com/desert/fruit/index.phtml');
  await clickAndWait(page, 'input[value^="Spin"]');
  return page;
};
