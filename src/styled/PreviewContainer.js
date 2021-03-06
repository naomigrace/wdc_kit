import React from "react"
import styled from "styled-components"
import Div100vh from "react-div-100vh"

const PreviewContainer = styled(Div100vh)`
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100vw;
  background: linear-gradient(
    -35deg,
    rgb(164, 147, 247),
    ${props => props.theme.colors.primary_darkest_wod}
  );
`

export default ({ children, ...rest }) => (
  <PreviewContainer {...rest}>
    <div style={{ width: `100%`, height: `100%` }}>{children}</div>
  </PreviewContainer>
)
