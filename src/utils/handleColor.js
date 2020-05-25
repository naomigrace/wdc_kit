export const handleColor = props =>
  props.color
    ? `color: ${props.theme.colors[props.color]}`
    : `color: ${props.theme.colors.neutral_black_wod}`

export default handleColor
