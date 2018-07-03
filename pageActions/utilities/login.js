const clickAndWait = require('./clickAndWait');

const TYPING_DELAY = 20;

module.exports = async function login(page, username, password) {
  await page.goto('http://www.neopets.com/login/');
  await page.type('.welcomeLoginUsernameInput input', username, { delay: TYPING_DELAY });
  await page.type('.welcomeLoginPasswordInput input', password, { delay: TYPING_DELAY });
  await clickAndWait(page, 'input.welcomeLoginButton');
  return page;
};
