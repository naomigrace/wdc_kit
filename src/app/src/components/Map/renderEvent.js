import React from "react"
import PopupEvent, { Date, Title } from "../../ui/PopupEvent"
import getDateTimeString from "../../utils/getDateTimeString"

const renderEvent = (event,  index) => {
  return (
    <PopupEvent key={`${event.title}-${event.date}-${index}`}>
      <Date value={event.date}>
        {getDateTimeString(event.date, event.time)}
      </Date>
      <Title>{event.title}</Title>
    </PopupEvent>
  )
}

export default renderEvent
