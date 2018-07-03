const URL = 'http://www.neopets.com/island/tombola.phtml';

module.exports = async function tombola(page) {
  await page.goto(URL);

  await Promise.all([
    page.waitForNavigation(),
    page.click('input[value^="Play"]'),
  ]);

  return page;
}
