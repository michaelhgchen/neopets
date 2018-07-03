module.exports = async function logout(page) {
  await page.goto('http://www.neopets.com/logout.phtml');
  return page;
};
