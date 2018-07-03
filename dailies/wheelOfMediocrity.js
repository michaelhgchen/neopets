const URL = 'http://www.neopets.com/prehistoric/mediocrity.phtml';

module.exports = async function wheelOfMediocrity(page) {
  await page.goto(URL);

  // TODO: Flash?!

  return page;
}
