const chrono = require("chrono-node");
const regexExtractor = require("../helpers/regexExtractor");

function cleanDate(event) {
  let eventDate;
  if (event.time) {
    eventDate = chrono.parseDate(`${event.date} ${event.time}`);
  } else {
    eventDate = chrono.parseDate(event.date);
  }
  event.date = eventDate;
}

module.exports = event => {
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
};
