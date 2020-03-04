const chrono = require('chrono-node');

module.exports = (event) => {
    if(event.time){
        event.date = chrono.parseDate(`${event.date} ${event.time}`)
    } else {
        event.date = chrono.parseDate(event.date)
    }
}
