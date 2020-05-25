const handleWhiteTextOnDark = (props, force) =>
  (props.color && props.color.indexOf("_wod") > -1) ||
  (props.gradient && props.gradient.indexOf("_wod") > -1) ||
  props.whiteOnDark ||
  force
    ? `color: ${props.theme.colors.neutral_white} !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;`
    : props.theme.colors.neutral_black_wod

export default handleWhiteTextOnDark
