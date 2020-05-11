import React from "react"
import styled from "styled-components"
import { handleIconStyle } from "../styled/utils"
import { Button, ButtonOpen, IconTextStyle } from "../../index"
import { Close } from "@styled-icons/material/Close"
import { ArrowUpward } from "@styled-icons/material-outlined/ArrowUpward"
import { ArrowBack } from "@styled-icons/material-outlined/ArrowBack"

const StyledClose = styled(Close)`
  ${props => handleIconStyle(props)}
`

const StyledArrowUpwards = styled(ArrowUpward)`
  ${props => handleIconStyle(props)}
`

const StyledArrowBack = styled(ArrowBack)`
  ${props => handleIconStyle(props)}
`

const ButtonIcon = ({ icon: Icon, openStyle, ...rest }) =>
  openStyle ? (
    <ButtonOpen icon {...rest}>
      <Icon />
    </ButtonOpen>
  ) : (
    <Button icon {...rest}>
      <Icon />
    </Button>
  )

export const CloseButton = ({ openStyle, ...rest }) => (
  <ButtonIcon
    icon={() => (
      <StyledClose
        size={rest.small ? `1.15rem` : `2.5rem`}
        color={openStyle ? rest.color : `neutral_white`}
      />
    )}
    openStyle={openStyle}
    {...rest}
  />
)
export const UpButton = ({ openStyle, ...rest }) => (
  <ButtonIcon
    icon={() => (
      <StyledArrowUpwards
        size={rest.small ? `1.15rem` : `2.5rem`}
        color={rest.color}
      />
    )}
    openStyle={openStyle ? rest.color : `neutral_white`}
    {...rest}
  />
)

export const BackButton = ({ openStyle, children, ...rest }) => (
  <div>
    {openStyle ? (
      <ButtonOpen {...rest}>
        <StyledArrowBack
          size={rest.small ? `1.15rem` : `1.4rem`}
          color={rest.color}
        />
        <IconTextStyle iconLeft>{children}</IconTextStyle>
      </ButtonOpen>
    ) : (
      <Button {...rest}>
        <StyledArrowBack
          size={rest.small ? `1.15rem` : `1.4rem`}
          color={rest.color}
        />
        <IconTextStyle iconLeft>{children}</IconTextStyle>
      </Button>
    )}
  </div>
)
