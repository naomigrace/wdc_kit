import React from "react"
import { CloseButton, UpButton } from "../styled"

export default {
  title: "Icon Buttons",
  component: UpButton,
}

export const CloseAndUpButtons = () => (
  <div>
    <CloseButton color={`neutral_mid_wod`}/>
    <CloseButton color={`neutral_mid_wod`} openStyle/>

    <CloseButton color={`neutral_mid_wod`} small openStyle/>
    <CloseButton color={`neutral_mid_wod`} small />

    <UpButton color={`neutral_mid_wod`} small />
    <UpButton color={`neutral_mid_wod`} openStyle/>

  </div>
)
