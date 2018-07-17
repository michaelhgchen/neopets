const doDailies = require('./doDailies');

doDailies({
  username: process.env.NEOPETS_USERNAME,
  password: process.env.NEOPETS_PASSWORD,
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
