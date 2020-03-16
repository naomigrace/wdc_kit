const parseEvents = events => {
  let newEvents = events
  newEvents.forEach(event => {
    event.date = new Date(event.date)
    event.price = parseFloat(event.price)
    event.latitude = parseFloat(event.latitude)
    event.longitude = parseFloat(event.longitude)
  })
  return newEvents
}

export default parseEvents
