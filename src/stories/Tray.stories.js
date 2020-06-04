import React from "react"
import {
  Tray,
  TrayNavigation,
  TrayContent,
  FlexContainer,
  Label,
  Button,
} from "../index"
import EventStick from "../components/EventStick"
import ScrollWrapper from "../components/ScrollWrapper"
import eventSample from "../fixtures/eventSample"
import useInput from "../components/useInput"

export default {
  title: "Tray",
  component: Tray,
}

export const TraySample = () => {
  const {
    value,
    setValue,
    renderInput
  } = useInput({type: "search", shadow: "md", placeholder: "search events"})
return (
  <Tray>
    <ScrollWrapper>
      <TrayNavigation>
        <Button
          small
          bold
          color={`tertiary_mid_wod`}
          shadow={`md`}
          style={{
            display: `block`,
          }}
        >
          show filters
        </Button>
        {renderInput()}
        {/* <Input type="search" shadow="md" placeholder="search events" /> */}
      </TrayNavigation>
      <TrayContent>
        <Label bold size={`sm`}>
          Showing 6 events
        </Label>
        <FlexContainer directionColumn>
          {eventSample.map(event => <EventStick {...event} />
)}
        </FlexContainer>
      </TrayContent>
    </ScrollWrapper>
  </Tray>
)
}