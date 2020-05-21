import React from "react"
import Button from "../styled/Button"
import ButtonOpen from "../styled/ButtonOpen"
import IconTextStyle from "../styled/IconTextStyle"
import { Check } from "@styled-icons/entypo/Check"

const ButtonInput = ({ selected, labelID, children, ...rest }) => {
  return selected ? (
    <Button
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
    </Button>
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

export default ButtonInput
