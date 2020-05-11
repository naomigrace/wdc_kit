import styled from "styled-components"
import { handleFont, handleWhiteTextOnDark, buttonBase, handleShadow, handleSpacing } from "../styled/utils"
import { darken } from "polished"

export default styled.button`
  ${props => handleFont(props)};
  ${props => handleWhiteTextOnDark(props)};
  ${props => buttonBase(props)};
  ${props => handleShadow(props)};
  ${props => handleSpacing(props)};
  border: none;
  background: ${props =>
    props.color
      ? props.theme.colors[props.color]
      : props.background 
      ? `` 
      : props.theme.colors.primary_dark_wod};

  &:hover,
  &:focus {
    background: ${props =>
      props.color
        ? darken(0.05, props.theme.colors[props.color])
        : props.background 
        ? `` 
        : darken(0.05, props.theme.colors.primary_dark_wod)};
  }

  &:focus {
    background: ${props =>
      props.color
        ? darken(0.1, props.theme.colors[props.color])
        : props.background 
        ? `` 
        : darken(0.1, props.theme.colors.primary_dark_wod)};
  }

  &:disabled {
      background: ${props => props.theme.colors.neutral_mid_wod}
  }
`