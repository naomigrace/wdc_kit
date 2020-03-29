import React from "react"
import ConditionalWrapper from "./ConditionalWrapper"
import Drawer from "@atlaskit/drawer"
import venues from "../data/venues"
import venueColors from "../data/venueColors"
import ResultCard, {
  TimeHeader,
  Title,
  Description,
  TicketContainer,
  TagsContainer,
} from "../ui/ResultCard"
import Lozenge from "../ui/Lozenge"
import ZeroState from "./ZeroState"
import ticketSVG from "../images/ticket.svg"
import getDateTimeString from "../utils/getDateTimeString"

const Results = ({ events, isDrawerOpen, setIsDrawerOpen, clearFilters, children }) => {
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
    let sliced = events.slice(0, 100)

    eventDisplay = sliced.map((event, index) => (
      <ConditionalWrapper
        key={index}
        condition={event.link}
        wrapper={children => (
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        )}
      >
        <ResultCard venue={event.venue} link={event.link ? true : false}>
          <TimeHeader>{getDateTimeString(event.date, event.time)}</TimeHeader>
          <Title>{event.title}</Title>
          <Description>{event.description}</Description>

          {event.tickets && (
            <TicketContainer>
              <a href={event.tickets} target="_blank" rel="noopener noreferrer">
                <img
                  width={20}
                  height={20}
                  src={ticketSVG}
                  alt="Purchase Tickets Icon"
                />
              </a>
            </TicketContainer>
          )}

          <TagsContainer>
            <Lozenge color={venueColors[event.venue]}>
              venue: {venues[event.venue]}
            </Lozenge>
            {"price" in event && event.price !== "" && (
              <Lozenge color={"grey"}>
                {event.price === 0 ? `free` : `$${event.price}`}
              </Lozenge>
            )}
          </TagsContainer>
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
      {children}
      <div>{eventDisplay}</div>
    </Drawer>
  )
}

export default Results
