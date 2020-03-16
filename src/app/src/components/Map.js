import React, {useState} from 'react';
import MapGL from 'react-map-gl';

// const MAPBOX_TOKEN = process.env.GATSBY_MAP_TOKEN; // Set your mapbox token here

console.log(MAPBOX_TOKEN)
const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  return (
      <div>hello
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/light-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
      </div>

  );
}

export default Map