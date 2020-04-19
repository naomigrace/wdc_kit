import React from "react"
import FilterInput from "../ui/FilterInput"
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
        height={150}
        src={WashingtonSVG}
        alt="illustration of the monuments in Washington DC"
      />
      <h1>{title}</h1>
      <p>{description}</p>
      <FilterInput
        style={{ margin: "2rem auto 0 auto", width: "fit-content" }}
        appearance={"primary"}
        onClick={fn}
      >
        {buttonTitle}
      </FilterInput>
    </div>
  )
}

export default ZeroState
