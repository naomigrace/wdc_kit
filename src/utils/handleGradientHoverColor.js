const handleGradientHoverColor = props => `      
    background: linear-gradient(
    90deg,
    ${props.theme.colors.primary_dark_wod},
    ${props.theme.colors.secondary_peach_wod}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
`

export default handleGradientHoverColor
