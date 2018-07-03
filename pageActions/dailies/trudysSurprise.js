module.exports = async function trudysSurprise(page) {
  await page.goto('http://www.neopets.com/trudys_surprise.phtml');
  // TODO: use 'http://www.neopets.com/trudydaily/ajax/claimprize.php';
  return page;
};
