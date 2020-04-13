import React from "react"
import venues from "../data/venues"
import Flex from "../ui/Flex"
import ResultCardStyle, {
  TimeHeader,
  Title,
  Link,
  Description,
  TicketContainer,
  TagsContainer,
} from "../ui/ResultCardStyle"
import ShortcutIcon from '@atlaskit/icon/glyph/shortcut';
import CreditcardIcon from '@atlaskit/icon/glyph/creditcard';
import getDateTimeString from "../utils/getDateTimeString"
import Lozenge from "../ui/Lozenge"

export default ({ selected, event, ...props }) => {
  return (
    <ResultCardStyle selected={selected} id={event.id} {...props}>
      <Title>{event.title ? event.title : event.description}</Title>
      <TimeHeader>{getDateTimeString(event.date, event.time)}</TimeHeader>

      {selected && (
        <div>
          <Description>{event.description}</Description>
          <Flex style={{ justifyContent: "flex-end", margin: "10px 0" }}>
          {event.tickets && (
              <Link href={event.tickets} target="_blank" rel="noopener noreferrer">
                tickets <CreditcardIcon size="small"/>
              </Link>
          )}
          {event.link && (
            <Link href={event.link} target="_blank" rel="noopener noreferrer">
              more info <ShortcutIcon size="small"/>
            </Link>
          )}
          </Flex>

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
