const cleanTimes = require("./time");
const cleanDates = require("./date");
const cleanLinks = require("./link");
const cleanPrice = require("./price");

module.exports = events => {
  events.forEach(event => {
    cleanTimes(event);
    cleanDates(event);
    cleanLinks(event);
    cleanPrice(event);
  });

  return events;
};
