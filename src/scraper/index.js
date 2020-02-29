const scrapefrom = require("scrapefrom");
const configs = require("./configs/index");

const keys = Object.keys(configs);

const promises = keys.map(
  key =>
    new Promise((resolve, reject) =>
      scrapefrom
        .custom(configs[key])
        .then(data => resolve(data)).catch(err => reject(err))
    )
);

new Promise((resolve, reject) =>
  Promise.all(promises).then(responses =>
    console.log(responses)).catch(err => err && console.log(err.message))
);
