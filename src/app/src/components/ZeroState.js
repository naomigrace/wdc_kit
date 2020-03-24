import React from "react"
import Button from "@atlaskit/button"
import WashingtonSVG from "../images/washingtondc.svg"

const ZeroState = ({
  title,
  description,
  callToAction: { title: buttonTitle, fn },
}) => {
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
      <Button
        style={{ marginTop: "2rem" }}
        appearance={"primary"}
        onClick={fn}
      >
        {buttonTitle}
      </Button>
    </div>
  )
}

export default ZeroState
