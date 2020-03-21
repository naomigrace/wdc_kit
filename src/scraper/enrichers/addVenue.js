const venueCoordinates = require("../../app/src/data/venueCoordinates");

module.exports = (key, data) => {
  data.forEach(event => {
    event.venue = key;
    let coordinates = venueCoordinates[key]
    event.latitude = coordinates[0]
    event.longitude = coordinates[1]
  });
  return data;
};
