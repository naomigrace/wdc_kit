const scrapefrom = require("scrapefrom")
const echostage = require("./configs/rockandrollhotel")

scrapefrom
  .custom(echostage)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// const axios = require("axios");

// const { url, params } = require("./configs/warnertheatre");

// axios
//   .get(url, { params: params })
//   .then(res => console.log(res.data))
//   .catch(err => err && err.message && console.log(err.message));
