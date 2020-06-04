import React, { useState } from "react"
import EventStick from "../components/EventStick"
import eventSample from "../fixtures/eventSample"

export default {
  title: "Event Stick",
  component: EventStick
} 

export const EventStickExample = () => {
  let [isLoading, setIsLoading] = useState(false)
  return(
    <div>
          {eventSample.map(event => <EventStick isLoading={isLoading} onClick={() => setIsLoading(!isLoading)} {...event} />)}
    </div>
  )
}
