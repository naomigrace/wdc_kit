import styled from "styled-components"
import { handleFont, handleColor, handleSpacing } from "../utils"

export default styled.a`
    ${props => handleFont(props)};
    ${props => handleColor(props)};
    margin: 0.25rem 0;
    ${props => handleSpacing(props)};
`