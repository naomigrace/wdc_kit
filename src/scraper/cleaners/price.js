const regexExtractor = require("../helpers/regexExtractor");

module.exports = event => {
  const freeRegex = /free/i;
  const priceRegex = /\$(\d+)/;

  if (event.price) {
    let isEventFree = event.price.search(freeRegex) !== -1;
    if (isEventFree) {
      event.price = parseFloat(0);
      return;
    }

    let extractedPrice = regexExtractor(event.price, priceRegex, 1);

    if (extractedPrice) {
      event.price = parseFloat(extractedPrice);
    }

    // event is cancelled or sold out is the typical use case
    if (isNaN(event.price)) {
      delete event.price;
    }
  }
};
