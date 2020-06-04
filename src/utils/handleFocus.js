import { transparentize } from "polished"

const handleFocus = props =>   `
&:focus, &:active {
    outline: none;
    box-shadow: 0 0 0 ${props.theme.widths.mini} ${
      props.colors
        ? transparentize(0.41, props.theme.colors[props.color])
        : props.theme.colors.focus
      };
  }
`

export default handleFocus