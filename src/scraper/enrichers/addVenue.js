module.exports = (key, data) => {
  data.forEach(event => {
    event.venue = key;
  });
  return data;
};
