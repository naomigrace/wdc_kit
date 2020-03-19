import React, { useState, useEffect, useMemo } from "react"
import MapGL, { Popup } from "react-map-gl"
import Pins from "./Pins"
import groupBy from "../utils/groupBy"
import venueCoordinates from "../data/venueCoordinates"
import renderEvent from "./mapRenderEvent"
import renderEvents from "./mapRenderEvents"

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA"

const Map = ({events}) => {
  const [viewport, setViewport] = useState({
    latitude: 38.8943,
    longitude: -77.0276,
    zoom: 12.5,
    bearing: 0,
    pitch: 0,
    minZoom: 11,
    maxZoom: 17,
  })
  const [eventInfo, setEventInfo] = useState()
  const [venuesEventsData, setVenuesEventsData] = useState()

  useEffect(() => {
    let groupedByVenue
    let venuesEventsData = []
    if(events){
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
        <Popup
          tipSize={5}
          anchor="top"
          longitude={eventInfo.longitude}
          latitude={eventInfo.latitude}
          closeOnClick={false}
          onClose={() => setEventInfo(null)}
        >
         {Array.isArray(eventInfo.events) ? multipleEvents : renderEvent(eventInfo.event)}
        </Popup>
      )
    }
  }

  return (
    <div>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle={"mapbox://styles/wannadc/ck7xuzkwg06me1hmzf07ypykm"}
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pins data={venuesEventsData} onClick={(event) => onClickMarker(event)} />
        {renderPopup()}
      </MapGL>
    </div>
  )
}

export default Map
