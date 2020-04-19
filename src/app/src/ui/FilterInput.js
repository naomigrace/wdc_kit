import styled from "styled-components"

export default styled.div`
    color: ${props => props.active ? props.theme.white : props.theme.navyBlue};
    border: 3px solid ${props => props.theme.navyBlue};
    font-family: ${props => props.theme.fonts.serifBold};
    cursor: pointer;
    text-align: center;
    background-color: ${props => props.active ? props.theme.navyBlue : props.theme.white};
    border-radius: 20px;
    padding: 8px 15px;
    margin-bottom: 6px;
    width: fit-content;

    span {
        color: #fff;
        margin-left: 3px;
        vertical-align: top;
    }

    &:hover {
        ${props => props.active && `background-color: #FF5722;`}
        border-color: #FF5722;
        color: ${props => props.active ? `#fff`: `#FF5722`};
    }

    &:active {
        ${props => props.active && `background-color: ${props.theme.purpleMid};`}
        border-color: ${props => props.theme.purpleMid};
        color: ${props => props.active ? `#fff` : props.theme.purpleMid};
    }

    ${props => props.clear && `
        background-color: ${props.theme.white} !important;
        border-color: ${props.theme.grey};
        color: ${props.theme.grey};
    `
    }

    ${props => props.inVisible && `visibility: hidden`}

`