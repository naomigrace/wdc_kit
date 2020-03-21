const venueCoordinates = require("../../app/src/data/venueNeighborhoods");

module.exports = (key, data) => {
  data.forEach(event => {
    event.neighborhood = venueCoordinates[key]
  });
  return data;
};
