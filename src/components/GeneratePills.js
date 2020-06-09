import React from "react"
import Pill from "../styled/Pill"
import styled from "styled-components"

const PillContainer = styled.div`
  margin: 2rem 0 0 0;
  text-align: center;
`

const GeneratePills = ({ status, ageRestriction, ...rest }) => (
  <PillContainer {...rest}>
    {status && status.length && status.map(s => (
      <Pill key={s}>{s}</Pill>
    ))}
    {ageRestriction && <Pill key={ageRestriction}>{ageRestriction}</Pill>}
  </PillContainer>
)

export default GeneratePills
