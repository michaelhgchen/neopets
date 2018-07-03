const URL = 'http://www.neopets.com/bank.phtml';

module.exports = async function bankInterest(page) {
  await page.goto(URL);

  await Promise.all([
    page.waitForNavigation(),
    page.click('input[value^="Collect Interest"]'),
  ]);

  return page;
}
