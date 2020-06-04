import React from "react"
import Pill from "../styled/Pill"

const GeneratePills = ({status, ageRestriction, ...rest}) => (
  <div {...rest}>
    {status.map(s => <Pill key={s}>{s}</Pill>)}
    {ageRestriction && <Pill key={ageRestriction}>{ageRestriction}</Pill>}
  </div>
)

export default GeneratePills