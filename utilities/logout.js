const URL = 'http://www.neopets.com/logout.phtml';

module.exports = async function logout(page) {
  await page.goto(URL);
  return page;
}
