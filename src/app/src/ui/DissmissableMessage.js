import styled from "styled-components"

export default styled.div`
    padding: 80px 40px 40px 40px;
    margin-top: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid grey;
    background-color: ${props => props.theme.purpleDark};
    h1 {
        color: #fff !important;
    }
`