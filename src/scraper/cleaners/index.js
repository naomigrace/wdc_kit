const cleanDate = require("./date");
const regexExtractor = require("../helpers/regexExtractor");

const easyDates = [
  "_930",
  "blackcat",
  "echostage",
  "pearlstreet",
  "songbyrd",
  "theanthem",
  "unionstage",
  "ustreet",
  "velvetlounge"
];

module.exports = (events) => {
  events.forEach(event => {
    if (easyDates.indexOf(event.venue) > -1) {
      if (event && event.date !== undefined) {
        cleanDate(event);
      }
    }
    if (event.venue === "howardtheatre") {
      let time = regexExtractor(
        event.date,
        /Concert starts @ ([^AP]+ [AP][M])/,
        1
      );
      event.time = time;
      let split = event.date.split("–");
      event.date = split[0];
      cleanDate(event);
    }
  });

  return events;
};
