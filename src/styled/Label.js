import styled from "styled-components"
import { handleFont, handleSpacing } from "../styled/utils"

export default styled.label`
    ${props => handleFont(props)};
    ${props => handleSpacing(props)};
    text-transform: uppercase;
    color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.neutral_mid_wod};
    display: block;
    margin-bottom: 1rem;
`