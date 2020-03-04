const scrapefrom = require("scrapefrom");
const configs = require("./configs/index");
const addVenue = require("./enrichers/addVenue");
const clean = require("./cleaners/index");
const db = require("projectdb");
const args = require("yargs").argv;

console.log(args);

if (args.scrape) {
  console.log("scraping for new data...");
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
    console.log(`scraping complete. ${data.length} events in the db.`);
  });
} else if (args.test) {
  let venue = args.test;

  console.log(`scraping data for ${venue}...`);

  scrapefrom
    .custom(configs[venue])
    .then(data => {
      console.log(data);
      console.log(`scraping complete, ${data.length} event found`);
    })
    .catch(err => reject(err));
} else if(args.clean){
  console.log("cleaning existing data...");
  let data = db.get();
  let cleaned = clean(data);
  cleaned.forEach(event => {
    console.log(event)
  });
  if(args.save){
    db.set(cleaned);
  }
  console.log(`cleaning complete`);
  if(args.save){
    console.log(`${cleaned.length} events saved`)
  }
}
