module.exports = async function wheelOfExcitement(page) {
  await page.goto('http://www.neopets.com/faerieland/wheel.phtml');
  // TODO: Flash?!
  return page;
};
