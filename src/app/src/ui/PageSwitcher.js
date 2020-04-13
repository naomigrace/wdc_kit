import styled from "styled-components"

export default styled.div`
    position: absolute;
    left: 0px;
    bottom: 0px;
    padding: 1px 0 0 0;
    background-color: ${props => props.theme.purple};
    border-radius: 5px;
    box-shadow: ${props => props.theme.boxShadow};
    font-size: 12px;
    p {
        text-align: center;
        margin-top: 0px;
        // color: #fff;
        border-top: 1px solid ${props => props.theme.lightBlue};
        padding: 7px 0;
        background-color: ${props => props.theme.white};
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }
`