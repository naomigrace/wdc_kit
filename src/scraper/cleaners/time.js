const regexExtractor = require("../helpers/regexExtractor");

module.exports = event => {
  let timeRegexResolver = venue => {
    const regexes = {
      _930: /Doors: (\S+ [PA][M])/i,
      blackcat: /Doors at ([^a-z]+)/,
      pearlstreet: /Doors: (\S+ [PA][M])/i,
      songbyrd: /Doors: ?(\S+ ?[PA][M])/i,
      theanthem: /Doors: (\S+ [PA][M])/i,
      unionstage: /Show: (\S+ [PA][M])/i,
      ustreet: /Doors: ?(\S+ [PA][M])/i,
      velvetlounge: /Doors:? (\w+)/
    };
    const result = regexes[venue];
    if (venue === "blackcat") result + " PM";
    return result;
  };

  let extractionRequired = [
    "_930",
    "blackcat",
    "pearlstreet",
    "songbyrd",
    "theanthem",
    "unionstage",
    "ustreet",
    "velvetlounge"
  ];

  if (event.time) {
    if (extractionRequired.indexOf(event.venue) > -1) {
      let extractedTime = regexExtractor(
        event.time,
        timeRegexResolver(event.venue),
        1
      );
      if (extractedTime) {
        event.time = extractedTime;
      }
    }
  }
};
