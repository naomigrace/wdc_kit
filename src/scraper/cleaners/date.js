const chrono = require('chrono-node');

module.exports = (event) => {
    if(event.time){
        console.log(`before ${event.date}`)
        console.log(`${event.date} ${event.time}`)
        event.date = chrono.parseDate(`${event.date} ${event.time}`)
        console.log(`after ${event.date}`)

    } else {
        event.date = chrono.parseDate(event.date)
    }
}
