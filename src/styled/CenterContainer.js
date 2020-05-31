import React from "react"
import styled from "styled-components"
import Div100vh from "react-div-100vh"

const CenterContainer = styled(Div100vh)`
  overflow: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100vw;
`
export default ({ children, ...rest }) => (
    <CenterContainer {...rest}>
      <div style={{ padding: `20px`}}>{children}</div>
    </CenterContainer>
  )
  
