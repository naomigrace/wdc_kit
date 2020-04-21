import styled from "styled-components"
import { regularFont, handleWhiteTextOnDark } from "./utils"

export default styled.div`
  ${props => regularFont(props)}
  display: inline-block;
  background-color: ${props =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors[`white`]};
  border-radius: ${props =>
    props.radius
      ? props.theme.radius[props.radius]
      : props.theme.radius[`mini`]};
  padding: ${props =>
    props.padding
      ? props.theme.padding[props.padding]
      : props.theme.padding[`mini`]};
  ${props => handleWhiteTextOnDark(props)};
`
