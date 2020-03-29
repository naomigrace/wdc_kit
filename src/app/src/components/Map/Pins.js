import React, { PureComponent } from "react"
import { Marker } from "react-map-gl"
import PinStyle from "../../ui/PinStyle"

const ICON = `M32 2a20 20 0 0 0-20 20c0 18 20 40 20 40s20-22 20-40A20 20 0 0 0 32 2zm7.4 32.1L32 28.7l-7.4 5.4 2.9-8.7L20 20h9.2l2.8-8.7 2.8 8.7H44l-7.4 5.4z`

const SIZE = 50

// Important for perf: the markers never change, avoid rerender when the map viewport changes
export default class Pins extends PureComponent {
  render() {
    const { data, onClick } = this.props

    return data.map((event, index) => (
      <Marker
        key={`marker-${index}`}
        longitude={event.longitude}
        latitude={event.latitude}
      >
        <PinStyle
          height={SIZE}
          viewBox="0 0 75 64"
          venue={event.venue}
          onClick={() => onClick(event)}
        >
          <path d={ICON} />
        </PinStyle>
      </Marker>
    ))
  }
}