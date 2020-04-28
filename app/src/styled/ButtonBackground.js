import React from "react"
import styled from "styled-components"
import { Button } from "./"
import { imageResolver } from "./utils"

export default styled(props => <Button background {...props}/>)`
  background: linear-gradient(${props => props.theme.gradients.primary_opaque}), url(${props => imageResolver(props.image)});
  background-size: cover;
  background-position-y: center;
  color: ${props => props.theme.colors.neutral_white};
  transition: all 250ms ease-in-out !important;

  &:hover, &:active {
    background: linear-gradient(${props => props.theme.gradients.primary});
    background-size: cover;
    background-position-y: center;  
  }
`

