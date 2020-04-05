import React from "react"
import venues from "../data/venues"

import ResultCardStyle, {
  TimeHeader,
  Title,
  Description,
  TicketContainer,
  TagsContainer,
} from "../ui/ResultCardStyle"
import ticketSVG from "../images/ticket.svg"
import getDateTimeString from "../utils/getDateTimeString"
import Lozenge from "../ui/Lozenge"

export default ({ selected, event, ...props }) => {
  // console.log(selected)
  return (
    <ResultCardStyle selected={selected} {...props}>
      <Title>{event.title ? event.title : event.description}</Title>
      <TimeHeader>{getDateTimeString(event.date, event.time)}</TimeHeader>

      {selected && (
        <div>
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
        </div>
      )}

      <TagsContainer>
        <Lozenge color={"music"}>{venues[event.venue]}</Lozenge>
        {"price" in event && event.price !== "" && (
          <Lozenge color={"grey"}>
            {event.price === 0 ? `free` : `$${event.price}`}
          </Lozenge>
        )}
      </TagsContainer>
    </ResultCardStyle>
  )
}
