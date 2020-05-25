import React from "react"
import EventStick from "../components/EventStick"

export default {
  title: "Event Stick",
  component: EventStick
} 

export const EventStickExample = () => {
  return(
    <div>
          <EventStick date={"2020-05-25T16:00:00.000Z"} title={'This is an event title'} description={'This is a description of the event that will go on for multiple lines there is going to be more words in order to fill up the space to show how much text we are ok with displaying ok just more words. This should hopefully do it.'}/>
          <EventStick active date={"2020-05-29T16:00:00.000Z"} title={'This is an active event title'} description={'This is another description of the event that will go on for multiple lines there is going to be more words in order to fill up the space to show how much text we are ok with displaying ok just more words. This should hopefully do it.'}/>
          <EventStick date={"2020-05-29T16:00:00.000Z"} title={'This is an event title'} description={'This is yet a description of the event that will go on for multiple lines there is going to be more words in order to fill up the space to show how much text we are ok with displaying ok just more words. This should hopefully do it.'}/>
    </div>
  )
}
