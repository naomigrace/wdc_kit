import React from "react"
import { format } from 'date-fns'
import ResultCard from "../ui/ResultCard"
import Badge from "@atlaskit/badge"

const Results = ({ events }) => {
  if (!events) {
    return <div>No results</div>
  }
  const allEvents = events.map(event => {
    console.log(event.date)
    if(!event.date || !event.date instanceof Date){
        return
    }
    return (
      <ResultCard>
        {/* <h4>{`${format(event.date, "eeee, LLLL Lo")} ${event.time ? `- ${event.time}`: ``}`}</h4> */}
        <h1>{event.title}</h1>
        <h2>{event.description}</h2>
        <Badge appearance={"primary"}>venue: {event.venue}</Badge>
      </ResultCard>
    )
  })

  return (
      <div>
          {allEvents}
      </div>
  )
}

export default Results
