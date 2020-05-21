import React from "react"
import ButtonBackground from "../styled/ButtonBackground"
import ButtonOpen from "../styled/ButtonOpen"
import IconTextStyle from "../styled/IconTextStyle"
import { Check } from "@styled-icons/entypo/Check"

const ButtonInputBackground = ({ selected, labelID, children, ...rest }) => {
  return selected ? (
    <ButtonBackground
      bold
      type="button"
      role="switch"
      color={`primary_mid_wod`}
      aria-labelledby={labelID}
      aria-checked={"true"}
      {...rest}
    >
      <IconTextStyle iconRight>{children}</IconTextStyle>
      <Check size="1rem" />
    </ButtonBackground>
  ) : (
    <ButtonOpen
      bold
      type="button"
      role="switch"
      aria-labelledby={labelID}
      aria-checked={"false"}
      {...rest}
    >
      {children}
    </ButtonOpen>
  )
}

export default ButtonInputBackground
