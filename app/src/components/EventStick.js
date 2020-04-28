import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import { Box, P } from "../styled"
import { Link } from "gatsby"

const EventStick = styled(props => (
  <Box shadow={`sm`} padding={`mini`} {...props} />
))`
    width: 100%;
    background-color: ${props => props.theme.colors.neutral_white};
    border: 1px solid ${props => props.theme.colors.primary_lightest};
    margin-bottom: 5px;
    transition: all 250ms ease-in-out;
    &:hover, &:active {
        // border-color: ${props => props.theme.colors.neutral_grey};
        box-shadow: ${props => props.theme.shadows.base};
        transform: translateY(-2px);
        cursor: pointer;
        background: linear-gradient(90deg, ${props =>
          props.theme.colors.primary_dark_wod}, ${props =>
  props.theme.colors.secondary_peach_wod});
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

const EventDescription = styled(P)`
  letter-spacing: 2px;
  color: grey;
`

export default ({ title, description, path, style }) => (
  // <AniLink
  //   to={path}
  //   direction="left"
  //   cover
  //   duration={1.25}
  //   bg={`linear-gradient(rgb(101, 84, 192), rgb(64, 50, 148))`}
  //   style={{ width: `100%`, textDecoration: `none` }}
  // >
  <AniLink
  to={path}
  direction="left"
  swipe
  duration={1.25}
  style={{width: `100%`, textDecoration: `none`, marginBottom: `10px`}}
>
    <EventStick style={style}>
      <EventTitle>{title}</EventTitle>
      {description && description.length && (
        <EventDescription>{description.toUpperCase()}</EventDescription>
      )}
    </EventStick>
  </AniLink>
)
