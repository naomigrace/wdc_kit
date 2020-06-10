import styled from "styled-components"
import { handleFont, handleColor, handleSpacing } from "../utils"
import A from "../styled/A"

export default styled.p`
  ${props => handleFont(props)};
  ${props => handleColor(props)};
  margin: 0.25rem 0;
  ${props => handleSpacing(props)};
  ${A} {
    ${props => handleFont(props)};
    ${props => handleColor(props)};
  }
`
