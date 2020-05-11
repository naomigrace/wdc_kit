import styled from "styled-components"
import { handleFont } from "../styled/utils"

export default styled.label`
    ${props => handleFont(props)};
    text-transform: uppercase;
    color: ${props => props.theme.colors.neutral_mid_wod};
    display: block;
    margin-bottom: 1rem;
`