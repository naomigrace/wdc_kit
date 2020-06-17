import styled from "styled-components"
import { handleFont, handleWhiteTextOnDark, handleShadow } from "../utils"

export default styled.span`
  ${props => handleFont(props)};
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${props => (props.big ? `16px` : `11px`)};
  padding: ${props => (props.big ? `8px 18px` : `3px 8px`)};
  text-align: center;
  vertical-align: super;
  margin-right: ${props => (props.big ? `10px` : `6px`)};
  border-radius: ${props =>
    props.big ? props.theme.radius.baby : props.theme.radius.chubby};
  ${props => handleWhiteTextOnDark(props, true)};
  ${props => handleShadow(props)};
  background-color: ${props =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.neutral_black_wod};
`
