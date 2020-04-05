import React from "react"
import DissmissableMessage from "../ui/DissmissableMessage"
import ZeroState from "./ZeroState"
import ResultsContainer from "../ui/ResultsContainer"
import ResultCard from "./ResultCard"

const Results = ({
  selectedEvent,
  setSelectedEvent,
  events,
  isDrawerOpen,
  setIsDrawerOpen,
  clearFilters,
  children,
}) => {
  let eventDisplay

  if (!events || events.length === 0) {
    eventDisplay = (
      <ZeroState
        title={`No Events Found`}
        description={`This is awkward, but we couldn't find any events for your criteria! Try broadening your search.`}
        callToAction={{ title: "reset my filters", fn: () => clearFilters() }}
      />
    )
  } else {
    let sliced = events.slice(0, 50)

    eventDisplay = sliced.map((event, index) => (
      <ResultCard
        selected={!selectedEvent ? false : event.id === selectedEvent.id}
        key={index}
        onClick={() => setSelectedEvent(event)}
        event={event}
      />
    ))
  }

  return (
    <ResultsContainer>
      <DissmissableMessage>
        <h1>
          It's been a while D.C.
          <br />
          Let's get out and support the city we love.
        </h1>
      </DissmissableMessage>
      {children}
      <div>{eventDisplay}</div>
    </ResultsContainer>
  )
}

export default Results
