const handleSpacing = props => {
  return props.mb
    ? `margin-bottom: ${props.mb}rem`
    : props.mt
    ? `margin-top: ${props.mt}rem`
    : props.mr
    ? `margin-right: ${props.mr}rem`
    : props.ml
    ? `margin-left: ${props.ml}rem`
    : ``
}

export default handleSpacing
