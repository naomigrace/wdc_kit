import styled from "styled-components"
import { handleGradientHoverColor } from "../utils"

const Heading1 = styled.h1`
  ${props => handleGradientHoverColor(props)};
  font-family: ${props => props.theme.fonts.family.display};
  letter-spacing: 1px;
`

const Heading2 = styled.h2`
  ${props => handleGradientHoverColor(props)};
  font-family: ${props => props.theme.fonts.family.display};
  letter-spacing: 1px;
`

export { Heading1, Heading2 }
