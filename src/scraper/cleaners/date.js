const chrono = require('chrono-node');
const regexExtractor = require('../helpers/regexExtractor')


function cleanDate(event) {
    if(event.time){
        event.date = chrono.parseDate(`${event.date} ${event.time}`)
    } else {
        event.date = chrono.parseDate(event.date)
    }
}

module.exports = (event) => {

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
}