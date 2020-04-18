import React, { useState } from "react"
import iconMapping from "../../data/location-icon-mapping.json"
import iconAtlas from "../../data/location-icon-atlas.png"
import { StaticMap } from "react-map-gl"
import DeckGL from "@deck.gl/react"
import { MapView } from "@deck.gl/core"
import { IconLayer } from "@deck.gl/layers"
import IconClusterLayer from "./icon-cluster-layer"
import renderEvents from "./renderEvents"
import VenueHeader from "./VenueHeader"
import groupBy from "../../utils/groupBy"
import venueCoordinates from "../../data/venueCoordinates"
import PopupStyle from "../../ui/PopupStyle"
import MapStyle from "../../ui/MapStyle"
const MAP_VIEW = new MapView({ repeat: true })

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA"

const Map = ({
  events,
  setSelectedEvent,
  viewport,
  setSelectedVenueFromMap
}) => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [expandedObjects, setExpandedObjects] = useState(null)


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
    }
  }
  
  const renderhoveredItems = () => {
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
              let showHeaderAndVenueLabel = venuesEventDataForPin.length === 1
              return (
                <div key={index}>
                  {showHeaderAndVenueLabel && <VenueHeader venue={venue.venue} />}
                  {renderEvents(venue.events[0], setSelectedEvent, showHeaderAndVenueLabel, setSelectedVenueFromMap)}
                </div>
              )
            })}
          </PopupStyle>
        )
      }
    }
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
    <MapStyle id="wdc-map">
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
    </MapStyle>
  )
}

export default Map
