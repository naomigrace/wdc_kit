import styled from "styled-components"

export default styled.div`
    z-index: 900;
    position: fixed;
    bottom: 30px;
    right: 20px;
    cursor: pointer;
    text-align: center;
    background-color: ${props => props.theme.purpleDarkest};
    border-radius: 20px;
    padding: 10px 15px 8px 15px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px;

    span {
        color: #fff;
        margin-left: 3px;
        vertical-align: top;
    }

    &:hover {
        background-color: #FF5722;
    }

    &:active {
        background-color: ${props => props.theme.purpleMid};
    }
    
    img {
        margin-top: 1px;
        width: 17px;
        height: 17px;
    }
`