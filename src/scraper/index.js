const scrapefrom = require("scrapefrom");
const configs = require("./configs/index");

const keys = Object.keys(configs);

const promises = keys.map(
  key =>
    new Promise((resolve, reject) =>
      scrapefrom
        .custom(configs[key])
        .then(data => resolve(data))
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

rawData().then(data => console.log(data))