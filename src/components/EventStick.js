import React from "react"
import styled from "styled-components"
import Box from "../styled/Box"
import P from "../styled/P"
import Pill from "../styled/Pill"
import FlexContainer from "../styled/FlexContainer"
import {
  isToday,
  handleWhiteTextOnDark,
  isAfterThisYear,
  handleGradientHoverColor,
  determineTitleAndSub
} from "../utils"

const EventTitle = styled(props => <P bold size={`md`} {...props} />)`
  color: ${props => props.theme.colors.tertiary_mid_wod};
  letter-spacing: 2px;
  hyphens: auto;
  display: inline-block;
`

const EventDate = styled.time`
  color: ${props => props.theme.colors.neutral_mid_wod};
  font-family: ${props => props.theme.fonts.family.display};
  font-size: 1.75rem;
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
  hyphens: auto;
`

const LoadingLine = styled.div`
  position: relative;
  height: 5px;
  background: #777;
  margin-top: -5px;
  border-bottom-left-radius: ${props => props.theme.radius.mini};
  border-bottom-right-radius: ${props => props.theme.radius.mini};
  animation: shimmer 2s infinite linear;
  background: linear-gradient(
    to right,
    rgb(192, 182, 242, 0.6) 4%,
    ${props => props.theme.colors.primary_light} 25%,
    rgb(192, 182, 242, 0.4) 36%
  );
  background-size: 1000px 100%;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`

const EventStick = styled(props => (
  <Box shadow={`sm`} padding={`none`} {...props} />
))`
  width: 95%;
  transition: all 250ms ease-in-out;
  margin-bottom: 5px;

  &:hover,
  &:active {
    box-shadow: ${props => props.theme.shadows.base};
    transform: translateY(-2px);
    cursor: pointer;
  }

  &:hover {

    ${Pill} {
      background: linear-gradient(
        90deg, ${props => props.theme.colors.secondary_peach_wod}, ${props => props.theme.colors.secondary_peach_wod}) !important;
      color: #fff !important;
    }

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
      : `
    background-color: ${props.theme.colors.neutral_white};
    border: 1px solid ${props.theme.colors.primary_lightest};

    `}
    // &:active,
    // &:focus {
    //   outline: none;
    //   box-shadow: 0 0 0 ${props => props.theme.widths.mini} ${props => props.theme.colors.focus};
    // }
  
    &:active {
      transform: scale(0.99);
    }

    padding: 0px;
    ${FlexContainer}{
      padding: 8px;
    }
`

export default ({ title, title2, description, date, postponed, canceled, ageRestriction, isLoading, ...rest }) => {
  let formattedDate = new Date(date)
  let month = formattedDate.getMonth() + 1
  let day = formattedDate.getDate()
  let year = formattedDate.getFullYear()

  let dateIsToday = isToday(formattedDate)
  let afterThisYear = isAfterThisYear(formattedDate)

  let { determineTitle, determineSubTitle } = determineTitleAndSub(title, title2, description)

  return (
    <EventStick {...rest}>
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
        <EventTitle>{determineTitle}</EventTitle> {(canceled || postponed || ageRestriction || status) && <div style={{ marginBottom: `2px`, marginTop: `2px`, display: `inline-block`}}>{(canceled || postponed) && <Pill>{canceled || postponed}</Pill>}{ageRestriction && <Pill>{ageRestriction}</Pill>}</div>}
          {determineSubTitle && determineSubTitle.length && (
            <EventDescription>{determineSubTitle.toUpperCase()}</EventDescription>
          )}
        </div>
      </FlexContainer>
      {isLoading && <LoadingLine />}
    </EventStick>
  )
}
