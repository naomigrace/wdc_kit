import React from "react"
import styled from "styled-components"
import Button from "./Button"
import { imageResolver } from "../utils"

export default styled(props => <Button background {...props}/>)`
  background: linear-gradient(${props => props.color === "secondary_peach_wod" ? props.theme.gradients.secondary_peach_wod_opaque : props.theme.gradients.primary_opaque_wod}), url(${props => imageResolver(props.image)});
  background-size: cover;
  background-position-y: center;
  color: ${props => props.theme.colors.neutral_white};
  transition: all 250ms ease-in-out !important;

  &:hover, &:active, &:focus {
    background: linear-gradient(${props => props.color === "secondary_peach_wod" ? props.theme.gradients.secondary_peach_wod : props.theme.gradients.primary_wod});
    background-size: cover;
    background-position-y: center;  
  }
`

