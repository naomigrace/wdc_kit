export const getFontSize = props => {
  return props.size
    ? props.theme.fonts.size[props.size]
    : props.theme.fonts.size.base
}

export const handleFont = props =>
  props.serif ? handleSerifFont(props) : handleSansFont(props)

export const handleSansFont = props => `
  font-size: ${
    props.size ? getFontSize(props) : props.theme.fonts.size.regular
  };
  font-family: ${props.theme.fonts.family.sans};
  font-weight: ${props.bold ? `700` : `400`};
`

export const handleSerifFont = props => `
font-size: ${props.size ? getFontSize(props) : props.theme.fonts.size.regular};
font-family: ${props.theme.fonts.family.serif};
font-weight: ${props.bold ? `bold` : `regular`};
`
