const { clickAndWait } = require('../utilities');

module.exports = async function tombola(page) {
  await page.goto('http://www.neopets.com/island/tombola.phtml');
  await clickAndWait(page, 'input[value^="Play"]');
  return page;
};
