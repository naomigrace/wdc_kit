import styled from "styled-components"

const Lozenge = styled.span`
    background-color: ${props => props.color};
    color: #fff;
    font-size: 11px;
    font-weight: bold;
    border-radius: 3px;
    padding: 3px 6px;
    margin-top: 10px;
    margin-right: 3px;
`

export default Lozenge;