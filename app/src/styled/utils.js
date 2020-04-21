export const handleWhiteTextOnDark = props =>
  props.color && props.color.indexOf("-wod") > -1
    ? `color: ${props.theme.colors[`neutral-white`]};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;`
    : props.theme.colors[`neutral-black-wod`]

export const regularFont = props =>
  `font-size: ${props.theme.fonts.size.regular};
  font-family: ${props.theme.fonts.family.sansRegular};`