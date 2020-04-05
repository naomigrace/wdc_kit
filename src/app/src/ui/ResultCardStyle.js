import styled from "styled-components"

export const TimeHeader = styled.p`
  color: grey;
  font-weight: normal;
  margin-top: 0;
`

export const Link = styled.a`
  margin-left: 5px;
  text-align: right;
  padding: 2px 5px;
  border-radius: 5px;
  float: right;
  color: #fff;
  &:hover {
    background-color: ${props => props.theme.red} !important;
    color: ${props => props.theme.lightBlue} !important;
  }
  &:active {
    background-color: ${props => props.theme.purpleMid} !important;
  }
`

export const Title = styled.p`
  font-weight: bold;
`

export const Description = styled.p``

export const TicketContainer = styled.div`
  margin-top: 5px;
  text-align: right;
  img {
    margin-left: 5px;
    vertical-align: text-top;
  }
  a {
    color: #fff;
    &:hover {
      background-color: ${props => props.theme.red} !important;
      color: ${props => props.theme.lightBlue} !important;
    }
  }
`

export const TagsContainer = styled.div`
  // text-align: right;
  margin-top: 5px;
  height: 20px;
  overflow-y: hidden;
  padding-bottom: 5px;
  scroll-behavior: smooth;
`

export default styled.div`
  cursor: pointer;
  h1,
  h2 {
    margin-top: 0;
  }
  h1,
  h2,
  h4 {
    overflow-wrap: break-word;
  }

  a:hover {
    text-decoration: none !important;
    text-underline-position: under;
  }

  margin: 0 0px;
  border: ${props => props.theme.shadowBase.border};
  padding-left: 40px;
  padding-right: 40px;

  transition: all 0.5s ease;

  ${props =>
    props.selected
      ? 
      `
      background-color: ${props.theme.purpleDarkest};
      padding-top: 30px;
      padding-bottom: 30px;
      color: ${props.theme.white};
      ${Title} {
        font-size: 17px;
      }
      ${TimeHeader} {
        color: ${props.theme.lightBlue}
      }
      `
      : 
      `
      padding-top: 20px;
      padding-bottom: 20px;
      background-color: #ff;
      `
  }
`
