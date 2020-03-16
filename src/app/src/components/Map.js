import React, {useState} from 'react';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA"

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 38.8943,
    longitude: -77.0276,
    zoom: 12.5,
    bearing: 0,
    pitch: 0,
    minZoom: 11,
    maxZoom: 17
  });

  return (
      <div>
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle={"mapbox://styles/wannadc/ck0cznyx70bdn1cl71u081o73"}
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
      </div>

  );
}

export default Map