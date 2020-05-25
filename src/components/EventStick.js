import React from "react"
import styled from "styled-components"
import Box from "../styled/Box"
import P from "../styled/P"
import FlexContainer from "../styled/FlexContainer"
import { isToday } from "../styled/utils"

const EventStick = styled(props => (
  <Box shadow={`sm`} padding={`mini`} {...props} />
))`
  width: 95%;
  background-color: ${props => props.theme.colors.neutral_white};
  border: 1px solid ${props => props.theme.colors.primary_lightest};
  margin-bottom: 5px;
  transition: all 250ms ease-in-out;
  &:hover,
  &:active {
    box-shadow: ${props => props.theme.shadows.base};
    transform: translateY(-2px);
    cursor: pointer;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.primary_dark_wod},
      ${props => props.theme.colors.secondary_peach_wod}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    text-shadow: none;
  }
  &:active {
    transform: scale(0.99);
  }
`

const EventTitle = styled(props => <P bold size={`md`} {...props} />)`
  letter-spacing: 2px;
`

const EventDate = styled.time`
  color: ${props => props.theme.colors.neutral_mid_wod};
  font-family: ${props => props.theme.fonts.family.display};
  font-size: 2rem;
  margin: auto 1rem auto 0;
  padding-right: 1rem;
  text-align: right;
  min-width: 100px;
  border-right: 1px solid ${props => props.theme.colors.neutral_grey};
`
const Today = styled.time`
  color: ${props => props.theme.colors.neutral_mid_wod};
  font-family: ${props => props.theme.fonts.family.display};
  font-size: 1.75rem;
  margin: auto 1rem auto 0;
  padding-right: 1rem;
  letter-spacing: 1px;
  text-align: right;
  min-width: 100px;
  border-right: 1px solid ${props => props.theme.colors.neutral_grey};
`

const EventDescription = styled(P)`
  letter-spacing: 2px;
  color: grey;
`

export default ({ title, description, date, ...rest }) => {
  let formattedDate = new Date(date)
  let month = formattedDate.getMonth() + 1
  let day = formattedDate.getDate()

  let dateIsToday = isToday(formattedDate)
  return (
    <EventStick {...rest}>
      <FlexContainer>
        {dateIsToday ? (
          <Today datetime={date}>TODAY</Today>
        ) : (
          <EventDate datetime={date}>
            {month}/{day}
          </EventDate>
        )}
        <div>
          <EventTitle>{title}</EventTitle>
          {description && description.length && (
            <EventDescription>{description.toUpperCase()}</EventDescription>
          )}
        </div>
      </FlexContainer>
    </EventStick>
  )
}
