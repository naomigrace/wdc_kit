import styled from "styled-components"
import { handleFont, buttonBase, handleSpacing } from "../utils"
import { darken } from "polished"

export default styled.button`
  ${props => handleFont(props)};
  ${props => buttonBase(props)};
  ${props => handleSpacing(props)};

  color: ${props =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.primary_dark_wod};
  border: ${props => props.theme.widths.mini} solid
    ${props =>
      props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.primary_dark_wod};

  background: transparent;

  &:hover,
  &:focus {
    border-color: ${props =>
      props.color
        ? darken(0.05, props.theme.colors[props.color])
        : darken(0.05, props.theme.colors.primary_dark_wod)};
    color: ${props =>
      props.color
        ? darken(0.05, props.theme.colors[props.color])
        : darken(0.05, props.theme.colors.primary_dark_wod)};
  }

  &:focus {
    border-color: ${props =>
      props.color
        ? darken(0.1, props.theme.colors[props.color])
        : darken(0.1, props.theme.colors.primary_dark_wod)};
    color: ${props =>
      props.color
        ? darken(0.1, props.theme.colors[props.color])
        : darken(0.1, props.theme.colors.primary_dark_wod)};
  }

  &:disabled {
    border-color: ${props => props.theme.colors.neutral_mid_wod};
    color: ${props => props.theme.colors.neutral_mid_wod};
  }
`
