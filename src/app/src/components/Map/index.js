import React, { useState, useEffect, useMemo } from "react"
import MapGL from "react-map-gl"
import Pins from "./Pins"
import renderEvent from "./renderEvent"
import renderEvents from "./renderEvents"
import VenueHeader from "./VenueHeader"
import groupBy from "../../utils/groupBy"
import venueCoordinates from "../../data/venueCoordinates"
import PopupStyle from "../../ui/PopupStyle"

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA"

const Map = ({events, setSelectedEvent, selectedEvent, isTabletOrMobile, viewport, setViewport }) => {
  const [eventInfo, setEventInfo] = useState()
  const [venuesEventsData, setVenuesEventsData] = useState()

  useEffect(() => {
    let groupedByVenue
    let venuesEventsData = []
    if(events){
      setEventInfo(null)
      setSelectedEvent(null)
      groupedByVenue = groupBy('venue')(events)

      Object.keys(groupedByVenue).forEach(venueGroup => {
        let subEvents = groupedByVenue[venueGroup]
        let venueCoords = venueCoordinates[venueGroup]
        delete groupedByVenue[venueGroup]
        let venueEvents = {
          venue: venueGroup,
          events: [subEvents],
          latitude: venueCoords[0],
          longitude: venueCoords[1]
        }
        venuesEventsData.push(venueEvents)
      })
    }
    setVenuesEventsData(venuesEventsData)

  }, [events])

  const onClickMarker = (event) => {
    setEventInfo(event)    
  }

  const multipleEvents = useMemo(() => eventInfo ? renderEvents(eventInfo) : null, [eventInfo])

  const renderPopup = () => {
    if(eventInfo){
      return(
        <PopupStyle
          width={250}
          tipSize={5}
          anchor="top"
          longitude={eventInfo.longitude}
          latitude={eventInfo.latitude}
          closeOnClick={false}
          onClose={() => setEventInfo(null)}
        >
         <VenueHeader venue={eventInfo.venue}/>
         {Array.isArray(eventInfo.events) ? multipleEvents : renderEvent(eventInfo.event)}
        </PopupStyle>
      )
    }
  }

  return (
    <div>
      <MapGL
        {...viewport}
        width={isTabletOrMobile ? `100vw` : `70vw`}
        height={isTabletOrMobile ? `60vh` : `100vh`}
        mapStyle={"mapbox://styles/wannadc/ck7xuzkwg06me1hmzf07ypykm"}
        onViewportChange={newViewport => setViewport(newViewport)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pins selectedEvent={selectedEvent} data={venuesEventsData} onClick={(event) => onClickMarker(event)} />
        {renderPopup()}
      </MapGL>
    </div>
  )
}

export default Map

