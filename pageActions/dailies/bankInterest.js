const { clickAndWait } = require('../utilities');

module.exports = async function bankInterest(page) {
  await page.goto('http://www.neopets.com/bank.phtml');
  await clickAndWait(page, 'input[value^="Collect"]');
  return page;
};
