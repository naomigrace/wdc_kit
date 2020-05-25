import styled from "styled-components"
import { handleWhiteTextOnDark } from "../utils"

export default styled.div`
    text-align: center;
    background: linear-gradient(${props => props.theme.gradients.neutral});
    border-radius: ${props => props.theme.radius.chubby};
    font-family: ${props => props.theme.fonts.family.display};
    font-size: ${props => props.theme.fonts.size.logo};
    color: ${props => props.theme.colors.primary_darkest_wod};
    font-weight: 400;
    padding: 0.25rem 0.6rem;
    box-shadow: ${props => props.theme.shadows.base};
    letter-spacing: 1px;
    transition: box-shadow 500ms ease-in-out;
    &:hover {
        ${props => handleWhiteTextOnDark(props, true)};
        color: ${props => props.theme.colors.neutral_white};
        background: linear-gradient(${props => props.theme.gradients.secondary_wod});
        box-shadow: ${props => props.theme.shadows.lg};
    }
`