import React from "react"
// import { format } from "date-fns"
import ResultCard from "../ui/ResultCard"
import Badge from "@atlaskit/badge"
import venues from "../data/venues"
import Drawer from "@atlaskit/drawer"

const Results = ({ events, isDrawerOpen, setIsDrawerOpen }) => {
  if (!events) {
    return <div>No results</div>
  }

  let sliced = events.slice(0, 100)

  const allEvents = sliced.map((event, index) => (
    <ResultCard key={index}>
      {/* <h4>{`${format(event.date, "eeee, LLLL Lo")} ${event.time ? `- ${event.time}`: ``}`}</h4> */}
      <h1>{event.title}</h1>
      <h2>{event.description}</h2>
      <Badge appearance={"primary"}>venue: {venues[event.venue]}</Badge>
    </ResultCard>
  ))

  const ContentOverrideComponent = ({ children }) => {
    return (
      <div
        style={{
          flex: 1,
          overflow: 'auto',
          marginTop: 60,
          margin: `60px 0 0 -68px`
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <Drawer
      onClose={() => setIsDrawerOpen(false)}
      isOpen={isDrawerOpen}
      width="wide"
      shouldUnmountOnExit={true}
      overrides={{
        Content: {
          component: ContentOverrideComponent,
        },
      }}
    >
      <div>{allEvents}</div>
    </Drawer>
  )
}

export default Results
