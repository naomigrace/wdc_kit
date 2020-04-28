import styled from "styled-components"

export default styled.div`
    margin: 0 auto 12rem auto;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    
    ${props => props.theme.breakpoints.desktop} {
        max-width: 960px;
        margin: 0 auto 10rem auto;
    }
`