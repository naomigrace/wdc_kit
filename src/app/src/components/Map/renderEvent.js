import React from "react"
import PopupEvent, { Date, Title } from "../../ui/PopupEvent"
import getDateTimeString from "../../utils/getDateTimeString"

const renderEvent = (event,  index, setSelectedEvent) => {
  let eventComingFromPopup = event
  eventComingFromPopup["fromPopup"] = true
  return (
    <PopupEvent key={`${event.title}-${event.date}-${index}`} onClick={() => setSelectedEvent(eventComingFromPopup)}>
      <Date value={event.date}>
        {getDateTimeString(event.date, event.time)}
      </Date>
      <Title>{event.title || event.description}</Title>
    </PopupEvent>
  )
}

export default renderEvent
