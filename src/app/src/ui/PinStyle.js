import styled from "styled-components"
import chroma from "chroma-js"
import venueColors from "../data/venueColors"

export default styled.svg`
    cursor: pointer;
    fill: ${props => chroma(venueColors[props.venue]).alpha(0.7).css()};
    transform: translate(${-50 / 2}px;${-50}px);
    &:hover {
        fill: ${props => chroma(venueColors[props.venue]).alpha(0.8).css()};
    }
`
