import styled from "styled-components"

export const PopupClose = styled.div`
    color: ${props => props.theme.orange} !important;
    margin: 5px;
    cursor: pointer !important;
    position: fixed;
`

export default styled.div`
    box-shadow: ${props => props.theme.shadows.popup};
    background-color: #fff;
    border-radius: 5px;
    width: 250px;
    min-height: 250px;
    height: 275px;
    max-height: 350px;
    overflow-x: hidden;
    overflow-y: scroll;
    // pointer-events: all;
    cursor: auto;
    position: relative;
    z-index: 9999999;
`