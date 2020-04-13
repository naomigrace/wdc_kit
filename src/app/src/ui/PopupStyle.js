import styled from "styled-components"

export default styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadows.popup};
    width: 250px;
    min-height: 100;
    max-height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
    pointer-events: all;
    cursor: auto;
    position: absolute;
    z-index: 9999999;


    .mapboxgl-popup-tip {
        border: 0;
    }

    .mapboxgl-popup-content {
        padding: 0;
    }
    .mapboxgl-popup-close-button {
        padding: 2px 8px 8px 8px;
        font-size: 20px;
        font-weight: bold;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        top: 5px;
        right: 5px;
        color: #fff;
        background-color: #000000c9;

        &:hover {
            background-color: #000000c9;
        }
    }

`