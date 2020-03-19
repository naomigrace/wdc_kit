import React from "react"
import WashingtonSVG from "../images/washingtondc.svg"

const ZeroState = ({ title, description, children }) => {
  return (
    <div
      style={{
        padding: 30,
        textAlign: `center`,
      }}
    >
      <img
        src={WashingtonSVG}
        alt="illustration of the monuments in Washington DC"
      />
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  )
}

export default ZeroState
