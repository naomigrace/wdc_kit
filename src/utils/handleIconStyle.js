const handleIconStyle = props => `
  color: ${
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.neutral_white
  };
`
export default handleIconStyle
