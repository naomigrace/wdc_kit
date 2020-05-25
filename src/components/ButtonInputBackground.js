import React from "react"
import ButtonBackground from "../styled/ButtonBackground"
import ButtonOpen from "../styled/ButtonOpen"
import { Check } from "@styled-icons/entypo/Check"

const ButtonInputBackground = ({ color, selected, labelID, children, ...rest }) => {
  return selected ? (
    <ButtonBackground
      bold
      type="button"
      role="switch"
      color={color || `primary_mid_wod`}
      aria-labelledby={labelID}
      aria-checked={"true"}
      style={{paddingRight: `37px`}}
      {...rest}
    >
      {children}
      <Check size="1rem" style={{ position: `absolute` }} role="graphic"/>
    </ButtonBackground>
  ) : (
    <ButtonOpen
      bold
      type="button"
      role="switch"
      aria-labelledby={labelID}
      aria-checked={"false"}
      style={{paddingRight: `37px`}}
      color={color}
      {...rest}
    >
      {children}
    </ButtonOpen>
  )
}

export default ButtonInputBackground
