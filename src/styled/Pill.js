import styled from "styled-components"
import { handleFont, handleWhiteTextOnDark, handleShadow } from "../utils"

export default styled.span`
    ${props => handleFont(props)};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
    padding: 2px 8px;
    text-align: center;
    vertical-align: top;
    margin-right: 3px;
    border-radius: ${props => props.theme.radius.chubby};
    ${props => handleWhiteTextOnDark(props, true)};
    ${props => handleShadow(props)};
    background-color: ${props => props.color ? props.theme.colors[props.color] : props.theme.colors.neutral_black_wod};

`