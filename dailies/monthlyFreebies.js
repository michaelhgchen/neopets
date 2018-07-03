const URL = 'http://www.neopets.com/freebies/index.phtml';

module.exports = async function monthlyFreebies(page, { day }) {
  if (!day || (new Date().getDate() === day)) {
    await page.goto(URL);
  }

  return page;
}
