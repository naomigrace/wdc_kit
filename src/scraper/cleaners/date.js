const chrono = require('chrono-node');

module.exports = (event) => {
    event.date = chrono.parseDate(event.date)
}
