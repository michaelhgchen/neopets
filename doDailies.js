const puppeteer = require('puppeteer');

const dailiesMapping = require('./pageActions/dailies');
const { login, logout } = require('./pageActions/utilities');

const browserConfig = {
  headless: process.env.NODE_ENV === 'production',
  slowMo: 100,
};

module.exports = async function doDailies(config) {
  const { username, password, dailies } = config;

  const browser = await puppeteer.launch(browserConfig);
  const page = await browser.newPage();

  await login(page, username, password);

  for (let i = 0; i < dailies.length; i += 1) {
    const { dailyName, dailyConfig } = dailies[i];
    await dailiesMapping[dailyName](page, dailyConfig); // eslint-disable-line
    // TODO: add error handling
    // TODO: create random event tracking decorator
  }

  await logout(page);
  browser.close();
};
