const { clickAndWait } = require('../utilities');

module.exports = async function tdmbgpop(page) {
  await page.goto('http://www.neopets.com/faerieland/tdmbgpop.phtml');
  await clickAndWait(page, 'input[value^="Talk"]');
  return page;
};
