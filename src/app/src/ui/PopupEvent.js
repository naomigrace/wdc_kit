import styled from "styled-components"
import Button from "@atlaskit/button"
import venueColors from "../data/venueColors"

export const Date = styled.time`
    font-weight: bold;
`

export const Title = styled.p`
    margin-top: 0;
`

export const EventButton = styled(Button)`
    margin: 10px;
    border: 1px solid ${props => venueColors[props.venue]} !important;
    background-color: #fff;
    span {
        color: ${props => venueColors[props.venue]} !important;
    }
`

export default styled.div`
    padding: 10px 10px 0 10px;
    &:last-child {
        padding-bottom: 10px;
    }
`