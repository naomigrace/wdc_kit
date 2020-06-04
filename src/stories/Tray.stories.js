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

export default {
  title: "Tray",
  component: Tray,
}

export const TraySample = () => (
  <Tray>
    <ScrollWrapper>
      <TrayNavigation>
        <Button
          small
          color={`primary_mid_wod`}
          shadow={`md`}
          style={{
            margin: `0 auto`,
            display: `block`,
          }}
        >
          show filters
        </Button>
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
