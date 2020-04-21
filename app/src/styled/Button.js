import styled from "styled-components"
import { regularFont, handleWhiteTextOnDark } from "../styled/utils"
import { darken } from "polished"

export default styled.button`
  ${props => regularFont(props)};
  ${props => handleWhiteTextOnDark(props)};
  display: inline-block;
  border: none;
  border-radius: ${props => props.theme.radius.baby};
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: ${props =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors[`primary-dark-wod`]};
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover,
  &:focus {
    background: ${props =>
      props.color
        ? darken(0.05, props.theme.colors[props.color])
        : darken(0.05, props.theme.colors[`primary-dark-wod`])};
  }

  &:focus {
    background: ${props =>
      props.color
        ? darken(0.1, props.theme.colors[props.color])
        : darken(0.1, props.theme.colors[`primary-dark-wod`])};
  }

  &:active {
    transform: scale(0.98);
  }
`
