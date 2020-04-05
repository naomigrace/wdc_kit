import styled from "styled-components"
import chroma from "chroma-js"

export default styled.svg`
    cursor: pointer;
    fill: ${props => props.selected ? chroma(props.theme.red).alpha(0.7).css() : chroma(props.theme.purpleMid).alpha(0.7).css()};
    transform: translate(${-50 / 2}px;${-50}px);
    &:hover {
        fill: ${props => props.selected ? chroma(props.theme.red).alpha(0.8).css(): chroma(props.theme.purpleMid).alpha(0.8).css()};
    }
`
