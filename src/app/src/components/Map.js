import React, { useState } from "react"
import MapGL, { Popup } from "react-map-gl"
import parseEvents from "../utils/parseEvents"
import events from "../data/events.json"
import Pins from "./Pins"
const parsedEvents = parseEvents(events)

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA"

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 38.8943,
    longitude: -77.0276,
    zoom: 12.5,
    bearing: 0,
    pitch: 0,
    minZoom: 11,
    maxZoom: 17,
  })

  const onClickMarker = () => {
      console.log("bloop")
  }

  const renderPopup = () => {
    // const {popupInfo} = null;

    return (
        <div>bloop</div>
    //   popupInfo && (
    //     <Popup
    //       tipSize={5}
    //       anchor="top"
    //       longitude={popupInfo.longitude}
    //       latitude={popupInfo.latitude}
    //       closeOnClick={false}
    //       onClose={() => this.setState({popupInfo: null})}
    //     >
    //       {/* <CityInfo info={popupInfo} /> */}
    //     </Popup>
    //   )
    );
  }
  return (
    <div>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle={"mapbox://styles/wannadc/ck0cznyx70bdn1cl71u081o73"}
        onViewportChange={setViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Pins data={parsedEvents} onClick={() => onClickMarker()} />
        {renderPopup()}
      </MapGL>
    </div>
  )
}

export default Map
