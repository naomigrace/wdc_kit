import React from "react"
import { Button, ButtonOpen, ButtonBackground } from "../../index"
import venues from "../configs/venues"

export default {
  title: "Buttons",
  // component: Button,
}

export const SolidButton = () => (
  <div>
    <Button color={`primary_mid_wod`}>show filters primary_mid_wod</Button>
    <Button bold color={`primary_dark_wod`}>
      show filters bold primary_dark_wod
    </Button>
    <Button small color={`tertiary_mid_wod`}>
      this is a small button
    </Button>
  </div>
)
export const DisabledSolidButton = () => (
  <Button disabled color={`primary_mid_wod`}>
    show filters
  </Button>
)

export const StyledOpenly = () => (
  <div>
    <ButtonOpen color={`primary_mid_wod`}>
      show filters primary_mid_wod
    </ButtonOpen>
    <ButtonOpen color={`primary_dark_wod`}>
      show filters primary_dark_wod
    </ButtonOpen>
    <ButtonOpen small color={`tertiary_mid_wod`}>
      this is a small button
    </ButtonOpen>
  </div>
)

export const DisabledOpenButton = () => (
  <ButtonOpen disabled color={`primary_mid_wod`}>
    show filters
  </ButtonOpen>
)

export const BackgroundButton = () => (
    <div>
        {Object.keys(venues).map(venue => <ButtonBackground image={venue}>{`${venues[venue]} - ${venue}`}</ButtonBackground>)}
    </div>
)
