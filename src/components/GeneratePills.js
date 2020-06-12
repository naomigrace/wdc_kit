import React from "react"
import Pill from "../styled/Pill"
import styled from "styled-components"

const PillContainer = styled.div`
  margin: 2rem 0 0 0;
  text-align: left;
`

const GeneratePills = ({ status, ageRestriction, big, ...rest }) => (
  <PillContainer {...rest}>
    {(status && status.length) ? status.map(s => <Pill big={big} key={s}>{s}</Pill>) : null}
    {ageRestriction ? <Pill big={big} key={ageRestriction}>{ageRestriction}</Pill> : null}
  </PillContainer>
)

export default GeneratePills
