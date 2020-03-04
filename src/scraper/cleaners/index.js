const cleanTimes = require("./time")
const cleanDates = require("./date");
const cleanLinks = require("./link")

module.exports = (events) => {
  events.forEach(event => {
    cleanTimes(event);
    cleanDates(event);
    cleanLinks(event);
  });

  return events;
};
