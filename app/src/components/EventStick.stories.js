import React from "react"
import EventStick from "./EventStick"

export default {
  title: "Event Stick",
  component: EventStick
} 

export const EventStickExample = () => 
    <EventStick title={'This is an event title'} description={'This a description of the event that will go on for multiple lines there is going to be more words in order to fill up the space to show how much text we are ok with displaying ok just more words. This should hopefully do it.'}/>