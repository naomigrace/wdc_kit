import styled from "styled-components"

export const MainBody_EventPage = styled.main`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${props => props.theme.colors.neutral_white};
`

export const MainBody_HomePage = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: stretch;
  justify-content: flex-end;
  height: 100vh;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.neutral_white};

`
