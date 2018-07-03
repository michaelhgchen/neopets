const URL = 'http://www.neopets.com/faerieland/wheel.phtml';

module.exports = async function wheelOfExcitement(page) {
  await page.goto(URL);

  // TODO: Flash?!

  return page;
}
