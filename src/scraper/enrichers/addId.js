
const { v4: uuidv4 } = require('uuid');

module.exports = (data) => {
  data.forEach(event => {
    event.id = uuidv4()
  });
  return data;
};
