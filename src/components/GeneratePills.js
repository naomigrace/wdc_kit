import React from "react"
import Pill from "../styled/Pill"

const GeneratePills = ({
  virtual,
  cancel,
  postpone,
  rescheduled,
  soldOut,
  status,
  ageRestriction,
  ...rest
}) => (
  <div {...rest}>
    {virtual && <Pill>{virtual}</Pill>}
    {cancel && <Pill>{cancel}</Pill>}
    {postpone && <Pill>{postpone}</Pill>}
    {rescheduled && <Pill>{rescheduled}</Pill>}
    {soldOut && <Pill>{soldOut}</Pill>}
    {status && <Pill>{status}</Pill>}
    {ageRestriction && <Pill>{ageRestriction}</Pill>}
  </div>
)

export default GeneratePills