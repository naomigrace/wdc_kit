import styled from "styled-components";

export default styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.theme[props.color]};
    border-radius: ${props => props.theme.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        font-weight: bold;
    }
    margin-right: 10px;
    border: ${props => props.theme.borderWidth} solid ${props => props.theme.lightBlue};
`