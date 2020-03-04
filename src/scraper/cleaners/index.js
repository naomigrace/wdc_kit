const cleanTimes = require("./time")
const cleanDates = require("./date");

module.exports = (events) => {
  events.forEach(event => {
    cleanTimes(event);
    cleanDates(event);
  });

  return events;
};
