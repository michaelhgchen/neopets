module.exports = async function wheelOfMediocrity(page) {
  await page.goto('http://www.neopets.com/prehistoric/mediocrity.phtml');
  // TODO: Flash?!
  return page;
};
