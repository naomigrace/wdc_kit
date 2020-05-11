import styled from "styled-components"
import { Box } from "../../index"
import { handleWhiteTextOnDark } from "./utils"

export default styled(Box)`
  background: linear-gradient(${props => props.theme.gradients[props.gradient]});
  ${props => props.whiteOnDark && handleWhiteTextOnDark(props)};

  ${props =>
    props.hover &&
    `&:hover {
        background: linear-gradient(${props.theme.gradients[props.hover]});
        cursor: pointer;
    }`}

  ${props =>
    props.active &&
    `&:active {
        background: linear-gradient(${props.theme.gradients[props.active]});
    }
    `}
`
