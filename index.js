const puppeteer = require('puppeteer');
const prompt = require('prompt');

const dailiesMapping = require('./dailies');
const { login, logout } = require('./utilities');

const browserConfig = process.env.NODE_ENV === 'production' ?
  {} : {
    headless: false,
    slowMo: 250
  };

async function doDailies(config) {
  const { username, password, dailies } = config;

  const browser = await puppeteer.launch(browserConfig);
  const page = await browser.newPage();

  await login(page, username, password);
  // TODO: create random event tracking decorator

  dailies.forEach(async function({ dailyName, dailyConfig = {} }) {
    try {
      if(!dailiesMapping[dailyName]) throw new Error('DNE');
      const daily = dailiesMapping[dailyName];
      await daily(page, dailyConfig);
    } catch(e) {
      // TODO: add notification
      console.log(`${dailyName} failed: ${e}`)
    }
  });

  await logout(page);

  browser.close();
}

prompt.start()

prompt.get({
  properties: {
    username: {
      required: true,
    },
    password: {
      hidden: true,
      required: true,
    }
  }
}, async function (err, result) {
  if (err) return 1;

  await doDailies({
    username: result.username,
    password: result.password,
    dailies: [
      {
        dailyName: 'trudysSurprise',
      },
      // {
      //   dailyName: 'bankInterest',
      // },
      // {
      //   dailyName: 'shopOfOffers',
      // },
      // {
      //   dailyName: 'monthlyFreebies',
      // },
      // {
      //   dailyName: 'wheelOfMediocrity',
      // },
      // {
      //   dailyName: 'wheelOfExcitement',
      // },
      // {
      //   dailyName: 'tombola',
      // },
      // {
      //   dailyName: 'fruitMachine',
      // },
      // {
      //   dailyName: 'coltzansShrine',
      // },
      // {
      //   dailyName: 'tdmbgpop',
      // },
      // {
      //   dailyName: 'underwaterFishing',
      // },
      // {
      //   dailyName: 'healingSprings',
      // },
      // {
      //   dailyName: 'buriedTreasure',
      // },
      // {
      //   dailyName: 'testYourStrength',
      // },
      // {
      //   dailyName: 'labRay',
      // },
    ]
  });
});
