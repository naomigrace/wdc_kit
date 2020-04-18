import styled from "styled-components"

export default styled.div`
    background-color: #fff;
    box-shadow: ${props => props.theme.shadowBase.boxShadow};
    border: ${props => props.theme.shadowBase.border};
    width: 100vw;
    height: 30vh;
    z-index: 200;

    overflow-x: none;
    overflow-y: scroll;
    scroll-behavior: smooth;
    
    @media (min-width: 1025px) {
        width: 30vw;
        height: 100vh;
    }
`