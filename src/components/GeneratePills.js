import React from "react"
import Pill from "../styled/Pill"
import styled from "styled-components"

const PillContainer = styled.div`
  margin: 2rem 0 0 0;
  text-align: left;
  ${props => props.big && (
    `${Pill} {
      background: rgba(255, 255, 255, 0.08);
    }`
  )}

`

const GeneratePills = ({ status, ageRestriction, big, ...rest }) => (
  <PillContainer big={big} {...rest}>
    {(status && status.length) ? status.map(s => <Pill big={big} key={s}>#{s}</Pill>) : null}
    {ageRestriction ? <Pill big={big} key={ageRestriction}>{ageRestriction}</Pill> : null}
  </PillContainer>
)

export default GeneratePills
