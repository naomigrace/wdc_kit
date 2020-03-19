const parseEvents = events => {
  let newEvents = events
  newEvents.forEach(event => {
    event.date = new Date(event.date)
    if(event.price){
      event.price = parseFloat(event.price)
    }
    event.latitude = parseFloat(event.latitude)
    event.longitude = parseFloat(event.longitude)
  })
  console.log(newEvents)
  return newEvents
}

export default parseEvents
