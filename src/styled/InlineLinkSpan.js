import styled from "styled-components"
import { handleSpacing } from "../styled/utils"

export default styled.span`
  ${props => handleSpacing(props)};
  font-weight: normal;
  text-decoration: underline;
  font-size: 0.75rem;
  vertical-align: middle;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: ${props => props.theme.radius[`baby`]};
  border: ${props => props.theme.widths.itty} solid ${props => props.theme.colors.neutral_white};

  &:focus {
    outline: none;
    color: ${props => props.theme.colors.primary_mid_wod};
    transition: all 150ms ease-in-out;
    border-color: 
      ${props =>
        props.color
          ? props.theme.colors[props.color]
          : props.theme.colors.focus};
  }
`
