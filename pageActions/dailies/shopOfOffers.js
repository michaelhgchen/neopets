const URL = 'http://www.neopets.com/shop_of_offers.phtml?slorg_payout=yes';

module.exports = async function shopOfOffers(page) {
  await page.goto(URL);
  return page;
};
