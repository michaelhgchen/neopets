const puppeteer = require('puppeteer');
const prompt = require('prompt');

const dailiesMapping = require('./dailies');
const { login, logout } = require('./utilities');

const browserConfig = process.env.NODE_ENV === 'production' ?
  {
    slowMo: 100, // to avoid suspicion
  } : {
    headless: false,
    slowMo: 100
  };

async function doDailies(config) {
  const { username, password, dailies } = config;

  const browser = await puppeteer.launch(browserConfig);
  const page = await browser.newPage();

  await login(page, username, password);

  for (let i = 0; i < dailies.length; ++i) {
    const { dailyName, dailyConfig } = dailies[i];
    await dailiesMapping[dailyName](page, dailyConfig);
    // TODO: add error handling
  }

  // TODO: create random event tracking decorator

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
      // {
      //   dailyName: 'trudysSurprise',
      // },
      {
        dailyName: 'bankInterest',
      },
      {
        dailyName: 'shopOfOffers',
      },
      {
        dailyName: 'monthlyFreebies',
        dailyConfig: {
          day: 1,
        }
      },
      // {
      //   dailyName: 'wheelOfMediocrity',
      // },
      // {
      //   dailyName: 'wheelOfExcitement',
      // },
      {
        dailyName: 'tombola',
      },
      {
        dailyName: 'fruitMachine',
      },
      {
        dailyName: 'coltzansShrine',
      },
      {
        dailyName: 'tdmbgpop',
      },
      {
        dailyName: 'underwaterFishing',
      },
      {
        dailyName: 'healingSprings',
      },
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
