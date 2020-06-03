import React from "react"
import Pill from "../styled/Pill"

const GeneratePills = ({status, ageRestriction, ...rest}) => (
  <div {...rest}>
    {status.map(s => <Pill>{s}</Pill>)}
    {ageRestriction && <Pill>{ageRestriction}</Pill>}
  </div>
)

export default GeneratePills