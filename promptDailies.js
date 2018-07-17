const prompt = require('prompt/lib/prompt');

const doDailies = require('./doDailies');

prompt.start();

prompt.get({
  properties: {
    username: { required: true },
    password: {
      hidden: true,
      required: true,
    },
  },
}, async (err, result) => {
  if (err) return 1;

  return doDailies({
    username: result.username,
    password: result.password,
    dailies: [
      { dailyName: 'trudysSurprise' },
      { dailyName: 'bankInterest' },
      { dailyName: 'shopOfOffers' },
      {
        dailyName: 'monthlyFreebies',
        dailyConfig: { day: 1 },
      },
      // { dailyName: 'wheelOfMediocrity' },
      // { dailyName: 'wheelOfExcitement' },
      { dailyName: 'tombola' },
      { dailyName: 'fruitMachine' },
      { dailyName: 'coltzansShrine' },
      { dailyName: 'tdmbgpop' },
      { dailyName: 'underwaterFishing' },
      { dailyName: 'healingSprings' },
      // { dailyName: 'buriedTreasure' },
      // { dailyName: 'testYourStrength' },
      // { dailyName: 'labRay' },
    ],
  });
});
