import styled from "styled-components"
import Button from "@atlaskit/button"

export const Date = styled.time`
    font-weight: bold;
`

export const Title = styled.p`
    margin-top: 0;
`

export const EventButton = styled(Button)`
    margin: 10px;
    border: 1px solid ${props => props.theme.red} !important;
    background-color: #fff;
    span {
        color: ${props => props.theme.red} !important;
    }
`

export default styled.div`
    padding: 5px 10px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.lightBlue};
    }
`