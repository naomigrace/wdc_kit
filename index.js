const scrapefrom = require("scrapefrom")
const _930 = require("./configs/930")

scrapefrom
  .custom(_930)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// const axios = require("axios");

// const { url, params } = require("./configs/warnertheatre");

// axios
//   .get(url, { params: params })
//   .then(res => console.log(res.data))
//   .catch(err => err && err.message && console.log(err.message));
