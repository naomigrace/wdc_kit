import styled from "styled-components"
import { Popup } from "react-map-gl"

export default styled(Popup)`
    border-radius: 5px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);
    width: 250px;
    max-height: 300px;
    overflow-x: none;
    overflow-y: scroll;

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