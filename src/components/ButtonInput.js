import React from "react"
import Button from "../styled/Button"
import ButtonOpen from "../styled/ButtonOpen"
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
      style={{paddingRight: `37px`}}
      {...rest}
    >
      {children}
      <Check size="1rem" style={{ position: `absolute` }} role="graphic"/>
    </Button>
  ) : (
    <ButtonOpen
      bold
      type="button"
      role="switch"
      aria-labelledby={labelID}
      aria-checked={"false"}
      style={{paddingRight: `37px`}}
      {...rest}
    >
      {children}
    </ButtonOpen>
  )
}

export default ButtonInput
