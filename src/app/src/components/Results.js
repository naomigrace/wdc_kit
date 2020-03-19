import React from "react"
import { format } from "date-fns"
import ConditionalWrapper from "./ConditionalWrapper"
import venueColors from "../data/venueColors"
import Button from "@atlaskit/button"
import Drawer from "@atlaskit/drawer"
import Lozenge from "../ui/Lozenge"
import venues from "../data/venues"
import ResultCard from "../ui/ResultCard"
import ZeroState from "./ZeroState"
import ticketSVG from "../images/ticket.svg"

const Results = ({ events, isDrawerOpen, setIsDrawerOpen, clearFilters }) => {
  let eventDisplay

  if (!events || events.length === 0) {
    eventDisplay = (
      <ZeroState
        title={`No Events Found`}
        description={`This is awkward, but we couldn't find any events for your criteria! Try broadening your search.`}
      >
        <Button
          style={{ marginTop: "2rem" }}
          appearance={"primary"}
          onClick={() => clearFilters()}
        >
          reset my filters
        </Button>
      </ZeroState>
    )
  } else {
    let sliced = events.slice(0, 100)

    eventDisplay = sliced.map((event, index) => (
      <ConditionalWrapper
        condition={event.link}
        wrapper={children => (
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        )}
      >
        <ResultCard
          key={index}
          venue={event.venue}
          link={event.link ? true : false}
        >
          <h4>{`${format(event.date, "eeee, LLLL Lo")} ${
            event.time ? `| ${event.time}` : ``
          }`}</h4>
          <h1>{event.title}</h1>
          <h2>{event.description}</h2>

          {event.tickets && (
            <div style={{ marginTop: "1rem" }}>
              <a href={event.tickets} target="_blank" rel="noopener noreferrer">
                <img
                  width={20}
                  height={20}
                  src={ticketSVG}
                  alt="Purchase Tickets Icon"
                />
              </a>
            </div>
          )}

          <div id="tagsContainer">
            <Lozenge color={venueColors[event.venue]}>
              venue: {venues[event.venue]}
            </Lozenge>
            {"price" in event && event.price !== "" && (
              <Lozenge color={"grey"}>
                {event.price === 0 ? `free` : `$${event.price}`}
              </Lozenge>
            )}
          </div>
        </ResultCard>
      </ConditionalWrapper>
    ))
  }

  const ContentOverrideComponent = ({ children }) => {
    return (
      <div
        style={{
          zIndex: -1,
          flex: 1,
          overflow: "auto",
          paddingTop: 60,
          margin: `0 0 0 -68px`,
          backgroundColor: `rgb(236, 237, 242)`,
        }}
      >
        {children}
      </div>
    )
  }

  return (
    <Drawer
      onClose={() => setIsDrawerOpen(false)}
      isOpen={isDrawerOpen}
      width="narrow"
      overrides={{
        Content: {
          component: ContentOverrideComponent,
        },
      }}
    >
      <div>{eventDisplay}</div>
    </Drawer>
  )
}

export default Results
