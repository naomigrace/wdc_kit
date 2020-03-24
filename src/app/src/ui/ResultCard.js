import styled from "styled-components"
import venueColors from "../data/venueColors"

export const TimeHeader = styled.h4`
  color: #6b6b6b
  font-weight: normal
  margin-bottom: 10px
`

export const Title = styled.h1`
  font-size: 1.5rem;
`

export const Description = styled.h2`
  font-size: 1.25rem;
`

export const TicketContainer = styled.div`
  margin-top: 10px;
  text-align: right;
`

export const TagsContainer = styled.div`
  text-align: right;
  margin-top: 10px;
  height: 20px;
  overflow-y: hidden;
  scroll-behavior: smooth;
`

export default styled.div`
  text-align: center;
  h1,
  h2 {
    margin-top: 0;
  }
  h1,
  h2,
  h4 {
    overflow-wrap: break-word;
  }
  margin: 10px 20px;
  box-shadow: ${props => props.theme.shadowBase.boxShadow};
  border: ${props => props.theme.shadowBase.border};
  border-radius: ${props => props.theme.shadowBase.borderRadius};
  background-color: #fff9;
  padding: 20px;
  a:hover {
    text-decoration: none !important;
    text-underline-position: under;
  }
  ${props =>
    props.link &&
    `
    &:hover {
      outline: 4px solid ${venueColors[props.venue]} !important;
      background-color: #fff;
      transition: all 0.2s ease;
    }
  `}
`
