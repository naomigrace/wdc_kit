
import React from "react"
import renderEvent from "./renderEvent"
import { EventButton } from "../../ui/PopupEvent"

const renderEvents = (events, setSelectedEvent, showHeaderAndVenueLabel, setSelectedVenueFromMap, setExpandedObjects) => {
  let renderThese = events
  let eventCount = renderThese.length
  if (eventCount > 2) {
    renderThese = renderThese.slice(0, 2)
  }

  if (renderThese) {
    let venue_name = renderThese[0].venue
    return (
      <div>
        {renderThese.map((event, index) => renderEvent(event, index, setSelectedEvent))}
        {showHeaderAndVenueLabel && eventCount > 1 && <EventButton onClick={() => { setSelectedVenueFromMap(venue_name); setExpandedObjects(null) }} venue={venue_name}>{`see ${eventCount - 1} more events`}</EventButton>}
      </div>
    )
  }
}

export default renderEvents
