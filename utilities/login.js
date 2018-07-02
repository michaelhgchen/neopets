const URL = 'http://www.neopets.com/login/';
const TYPING_DELAY = 20;

module.exports = async function login(page, username, password) {
  await page.goto(URL);

  await page.type('.welcomeLoginUsernameInput input', username, { delay: TYPING_DELAY });
  await page.type('.welcomeLoginPasswordInput input', password, { delay: TYPING_DELAY });

  await Promise.all([
    page.waitForNavigation(),
    page.click('input.welcomeLoginButton'),
  ]);

  return page;
}
