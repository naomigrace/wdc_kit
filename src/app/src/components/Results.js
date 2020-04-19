import React, { useEffect } from "react"
import DissmissableMessage from "../ui/DissmissableMessage"
import ZeroState from "./ZeroState"
import ResultsContainer from "../ui/ResultsContainer"
import ResultCard from "./ResultCard"

const Results = ({
  selectedEvent,
  selectedVenue,
  setSelectedEvent,
  events,
  clearFilters,
  children,
}) => {
  useEffect(() => {
    if (selectedEvent && selectedEvent.fromPopup) {
      let selectedEventDiv = document.getElementById(selectedEvent.id)
      selectedEventDiv.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }, [selectedEvent])

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
      <div>
        {(selectedEvent || selectedVenue )? (
          events.map((event, index) => (
            <ResultCard
              selected={!selectedEvent ? false : event.id === selectedEvent.id}
              key={index}
              onClick={() => setSelectedEvent(event)}
              event={event}
            />
          ))
        ) : (
          <ZeroState
            title={`Select a Pin`}
            description={`Click on a pin or try broadening your search.`}
            callToAction={{
              title: "reset filters",
              fn: () => clearFilters(),
            }}
          />
        )}
      </div>
    </ResultsContainer>
  )
}

export default Results
