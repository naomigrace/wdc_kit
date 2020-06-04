import handleFocus from "./handleFocus"

const buttonBase = props => `
  display: inline-block;
  padding: ${props.icon ? `0` : props.small ? `0.5rem 1rem` : `1rem 2rem`};
  ${
    props.icon && props.small
      ? `width: 30px; height: 30px;`
      : props.icon && `width: 60px; height: 60px;`
  }
  font-size: ${
    props.icon
      ? props.small
        ? `0.5rem`
        : `0.75rem`
      : props.small
      ? `0.65rem`
      : `0.9rem`
  } !important;
  border-radius: ${props.icon ? `50%` : props.theme.radius.baby};
  margin-right: ${props.theme.widths.chubby};
  text-decoration: none;
  font-weight: ${props.bold ? `bold` : `regular`};
  line-height: 1;
  cursor: ${!props.disabled ? `pointer` : `not-allowed`};
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    outline: none;
    ${!props.background && `transform: scale(0.98);`}
  }

  ${handleFocus(props)};
`

export default buttonBase
