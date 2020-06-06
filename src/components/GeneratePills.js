import React from "react"
import Pill from "../styled/Pill"
import styled from "styled-components"

const PillContainer = styled.div`
  /* margin-top: -2px; */
`

const GeneratePills = ({status, ageRestriction, ...rest}) => (
  <PillContainer {...rest}>
    {status.map(s => <Pill key={s}>{s}</Pill>)}
    {ageRestriction && <Pill key={ageRestriction}>{ageRestriction}</Pill>}
  </PillContainer>
)

export default GeneratePills