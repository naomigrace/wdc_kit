import React, { useState, useEffect, useMemo } from "react"
import iconMapping from "../../data/location-icon-mapping.json"
import iconAtlas from "../../data/location-icon-atlas.png"
import MapGL, { StaticMap } from "react-map-gl"
import DeckGL from "@deck.gl/react"
import { MapView } from "@deck.gl/core"
import { IconLayer } from "@deck.gl/layers"
import IconClusterLayer from "./icon-cluster-layer"

import Pins from "./Pins"
import renderEvent from "./renderEvent"
import renderEvents from "./renderEvents"
import VenueHeader from "./VenueHeader"
import groupBy from "../../utils/groupBy"
import venueCoordinates from "../../data/venueCoordinates"
import PopupStyle from "../../ui/PopupStyle"
const MAP_VIEW = new MapView({ repeat: true })

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA"

const Map = ({
  events,
  setSelectedEvent,
  selectedEvent,
  isTabletOrMobile,
  viewport,
  setViewport,
}) => {
  const [eventInfo, setEventInfo] = useState()
  const [venuesEventsData, setVenuesEventsData] = useState()
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [hoveredObject, setHoveredObject] = useState(null)
  const [expandedObjects, setExpandedObjects] = useState(null)

  const onHover = info => {
    if (expandedObjects) {
      return
    }
    const { x, y, object } = info
    setX(x)
    setY(y)
    setHoveredObject(object)
  }

  const onClick = info => {
    const { x, y, objects, object } = info
    if (object) {
      setX(x)
      setY(y)
      setExpandedObjects(objects || object)
    }
  }

  const closePopup = () => {
    if (expandedObjects) {
      setExpandedObjects(null)
      setHoveredObject(null)
    }
  }

  useEffect(() => {
    let groupedByVenue
    let venuesEventsData = []
    if (events) {
      setEventInfo(null)
      setSelectedEvent(null)
      groupedByVenue = groupBy("venue")(events)

      Object.keys(groupedByVenue).forEach(venueGroup => {
        let subEvents = groupedByVenue[venueGroup]
        let venueCoords = venueCoordinates[venueGroup]
        delete groupedByVenue[venueGroup]
        let venueEvents = {
          venue: venueGroup,
          events: [subEvents],
          latitude: venueCoords[0],
          longitude: venueCoords[1],
        }
        venuesEventsData.push(venueEvents)
      })
    }
    setVenuesEventsData(venuesEventsData)
  }, [events])

  const onClickMarker = event => {
    setEventInfo(event)
  }

  const multipleEvents = useMemo(
    () => (eventInfo ? renderEvents(eventInfo, setSelectedEvent) : null),
    [eventInfo]
  )

  const renderPopup = () => {
    if (eventInfo) {
      return (
        <PopupStyle
          width={250}
          tipSize={5}
          anchor="top"
          longitude={eventInfo.longitude}
          latitude={eventInfo.latitude}
          closeOnClick={false}
          onClose={() => setEventInfo(null)}
        >
          <VenueHeader venue={eventInfo.venue} />
          {Array.isArray(eventInfo.events)
            ? multipleEvents
            : renderEvent(eventInfo.event, null, setSelectedEvent)}
        </PopupStyle>
      )
    }
  }

  const renderhoveredItems = () => {
    // const {x, y, hoveredObject, expandedObjects} = this.state;

    if (expandedObjects) {
      let groupedByVenue = groupBy("venue")(expandedObjects)

      let venuesEventDataForPin = []
      Object.keys(groupedByVenue).forEach(venueGroup => {
        let subEvents = groupedByVenue[venueGroup]
        let venueCoords = venueCoordinates[venueGroup]
        delete groupedByVenue[venueGroup]
        let venueEvents = {
          venue: venueGroup,
          events: [subEvents],
          latitude: venueCoords[0],
          longitude: venueCoords[1],
        }
        venuesEventDataForPin.push(venueEvents)
      })

      if (venuesEventDataForPin.length) {
        console.log(venuesEventDataForPin)
        return (
          <PopupStyle  style={{ left: x, top: y }}>
            {venuesEventDataForPin.map((venue, index) => {
              let sliced = venue.events ? venue.events[0].slice(0, 1) : []
              return (
                <div key={index}>
                  <VenueHeader venue={venue.venue} />
                  {renderEvents(venue.events[0], setSelectedEvent)}
                </div>
              )
            })}
          </PopupStyle>
        )
      }
    }

    if (!hoveredObject) {
      return null
    }

    return hoveredObject.cluster ? (
      <div className="tooltip" style={{ left: x, top: y }}>
        <h5>{hoveredObject.point_count} records</h5>
      </div>
    ) : (
      <div className="tooltip" style={{ left: x, top: y }}>
        <h5>
          {hoveredObject.name}{" "}
          {hoveredObject.year ? `(${hoveredObject.year})` : ""}
        </h5>
      </div>
    )
  }

  const renderLayers = () => {
    let showCluster = true

    const layerProps = {
      data: events,
      pickable: true,
      getPosition: d => {
        return [d.longitude, d.latitude]
      },
      iconAtlas,
      iconMapping,
      onHover: onHover,
    }

    const layer = showCluster
      ? new IconClusterLayer({
          ...layerProps,
          id: "icon-cluster",
          sizeScale: 60,
        })
      : new IconLayer({
          ...layerProps,
          id: "icon",
          getIcon: d => "marker",
          sizeUnits: "meters",
          sizeScale: 200,
          sizeMinPixels: 20,
        })

    return [layer]
  }

  return (
    <div>
      <DeckGL
        layers={renderLayers()}
        views={MAP_VIEW}
        initialViewState={viewport}
        controller={{ dragRotate: false }}
        onViewStateChange={closePopup}
        onClick={onClick}
      >
        <StaticMap
          reuseMaps
          mapStyle={"mapbox://styles/wannadc/ck7xuzkwg06me1hmzf07ypykm"}
          preventStyleDiffing={true}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
        {renderhoveredItems()}
      </DeckGL>

      {/* <MapGL
        {...viewport}
        width={isTabletOrMobile ? `100vw` : `70vw`}
        height={isTabletOrMobile ? `60vh` : `100vh`}
        mapStyle={"mapbox://styles/wannadc/ck7xuzkwg06me1hmzf07ypykm"}
        onViewportChange={newViewport => setViewport(newViewport)}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pins setSelectedEvent={setSelectedEvent} data={venuesEventsData} onClick={(event) => onClickMarker(event)} />
        {renderPopup()}
      </MapGL> */}
    </div>
  )
}

export default Map
