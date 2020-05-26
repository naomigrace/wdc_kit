import React from "react"
import styled from "styled-components"
import Box from "../styled/Box"
import P from "../styled/P"
import FlexContainer from "../styled/FlexContainer"
import {
  isToday,
  handleWhiteTextOnDark,
  isAfterThisYear,
  handleGradientHoverColor,
} from "../utils"

const EventTitle = styled(props => <P bold size={`md`} {...props} />)`
  letter-spacing: 2px;
`

const EventDate = styled.time`
  color: ${props => props.theme.colors.neutral_mid_wod};
  font-family: ${props => props.theme.fonts.family.display};
  font-size: 2rem;
  margin: auto 0.75rem auto 0;
  padding-right: 0.75rem;
  text-align: right;
  min-width: 100px;
  border-right: 1px solid ${props => props.theme.colors.neutral_grey};
`
const Today = styled.time`
  color: ${props => props.theme.colors.neutral_mid_wod};
  font-family: ${props => props.theme.fonts.family.display};
  font-size: 1.75rem;
  margin: auto 0.75rem auto 0;
  padding-right: 0.75rem;
  letter-spacing: 1px;
  text-align: right;
  min-width: 100px;
  border-right: 1px solid ${props => props.theme.colors.neutral_grey};
`

const EventDescription = styled(P)`
  letter-spacing: 2px;
  color: grey;
`

const EventStick = styled(props => (
  <Box shadow={`sm`} padding={`mini`} {...props} />
))`
  width: 95%;
  transition: all 250ms ease-in-out;
  margin-bottom: 5px;

  &:active {
    transform: scale(0.99);
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 ${props => props.theme.widths.mini} ${props => props.theme.colors.focus};
  }

  &:hover,
  &:active {
    box-shadow: ${props => props.theme.shadows.base};
    transform: translateY(-2px);
  }

  &:hover {
    ${EventTitle}, ${EventDescription}{
      ${props => !props.active && handleGradientHoverColor(props)};
    }
    ${EventDate}, ${Today}{
      color: ${props => props.theme.colors.primary_dark_wod};
    }
  }


  ${props =>
    props.active
      ? `
    ${handleWhiteTextOnDark(props, true)}
    background: linear-gradient(${props.theme.gradients.primary_wod});
    color: ${props.theme.colors.neutral_white} !important;
    ${EventDate}, ${Today}, ${EventTitle}, ${EventDescription}{
      color: ${props.theme.colors.neutral_white} !important;
    }
    &:hover,
    &:active {
      background: linear-gradient(${props.theme.gradients.tertiary_wod});
      color: ${props.theme.colors.neutral_white} !important;
      ${EventDate}, ${Today}, ${EventTitle}, ${EventDescription}{
        color: ${props.theme.colors.neutral_white} !important;
      }
    }
    `
    : 
    `
    background-color: ${props.theme.colors.neutral_white};
    border: 1px solid ${props.theme.colors.primary_lightest};

    `}
`

export default ({ title, description, date, ...rest }) => {
  let formattedDate = new Date(date)
  let month = formattedDate.getMonth() + 1
  let day = formattedDate.getDate()
  let year = formattedDate.getFullYear()

  let dateIsToday = isToday(formattedDate)
  let afterThisYear = isAfterThisYear(formattedDate)

  return (
    <EventStick {...rest} tabIndex={0}>
      <FlexContainer>
        {dateIsToday ? (
          <Today datetime={date}>TODAY</Today>
        ) : (
          <EventDate datetime={date}>
            {month}/{day}
            {afterThisYear && `/${year.toString().slice(2)}`}
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
