
import React from "react"
import renderEvent from "./mapRenderEvent"
import { EventButton } from "../ui/PopupEvent"

const renderEvents = info => {
  let renderThese = info.events[0]
  let eventCount = renderThese.length
  if (eventCount > 2) {
    renderThese = renderThese.slice(0, 2)
  }

  if (renderThese) {
    return (
      <div>
        {renderThese.map(event => renderEvent(event))}
        {eventCount > 2 && <EventButton venue={renderThese[0].venue}>{`see ${eventCount - 2} more events`}</EventButton>}
      </div>
    )
  }
}

export default renderEvents
