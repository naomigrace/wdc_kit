export const handleShadow = props => `
  ${props.shadow && `box-shadow: ${props.theme.shadows[props.shadow]};`}
`

export default handleShadow
