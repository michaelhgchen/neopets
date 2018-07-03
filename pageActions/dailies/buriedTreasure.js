const { clickAndWait } = require('../utilities');

module.exports = async function buriedTreasure(page) {
  await page.goto(URL);
  await clickAndWait(page, 'input[value^="Click"]');
  await clickAndWait(page, 'a[href="buriedtreasure.phtml"]'); // TODO: add dimensions
  return page;
};
