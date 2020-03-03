const scrapefrom = require("scrapefrom");
const configs = require("./configs/index");
const addVenue = require("./enrichers/addVenue");
const clean = require("./cleaners/index");
const db = require("projectdb");

let args = process.argv;

if (args.includes('new')) {
  console.log("scraping for new data");
  const keys = Object.keys(configs);

  const promises = keys.map(
    key =>
      new Promise((resolve, reject) =>
        scrapefrom
          .custom(configs[key])
          .then(data => {
            let keyedData = addVenue(key, data);
            resolve(keyedData);
          })
          .catch(err => reject(err))
      )
  );

  const rawData = () =>
    new Promise((resolve, reject) =>
      Promise.all(promises)
        .then(responses => {
          const merged = [].concat.apply([], responses);
          resolve(merged);
        })
        .catch(err => reject(err))
    );

  rawData().then(data => {
    db.set(data);
  });
} else {
  console.log('cleaning existing data')
  let data = db.get();
  let cleaned = clean(data);
  cleaned.forEach(event => console.log(event.time));
}
