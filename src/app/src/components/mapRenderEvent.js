import React from "react"
import PopupEvent, { Date, Title } from "../ui/PopupEvent"
import { format } from "date-fns"

const renderEvent = event => {
  return (
    <PopupEvent>
      <Date value={event.date}>{`${format(event.date, "eeee, LLLL Lo")} ${
        event.time ? `| ${event.time}` : ``
      }`}</Date>
      <Title>{event.title}</Title>
    </PopupEvent>
  )
}

export default renderEvent
