import styled from "styled-components"

const PreviewLogo = styled.h1`
  font-family: ${props => props.theme.fonts.family.display};
  font-size: 3.5rem;
  letter-spacing: 2px;
  color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.neutral_white};
  -webkit-font-smoothing: antialiased;
  margin-top: 0;
  margin-bottom: 0;
`

export default PreviewLogo
