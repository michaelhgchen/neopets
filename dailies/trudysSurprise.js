const TRUDY_URL = 'http://www.neopets.com/trudys_surprise.phtml';
const CLAIM_URL = 'http://www.neopets.com/trudydaily/ajax/claimprize.php';

module.exports = async function trudysSurprise(page) {
  await page.goto(TRUDY_URL);

  // TODO: use CLAIM_URL

  return page;
}
