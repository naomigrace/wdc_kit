import React from "react"
import styled from "styled-components"
import { handleFocus, handleShadow, handleWhiteTextOnDark } from "../utils"
import { Search } from "@styled-icons/icomoon/Search"

const maxWidth = `200px`

const SearchIcon = styled(Search)`
  position: absolute;
  top: 12px;
  left: 12px;
  size: 1rem;
  color: ${props => props.theme.colors.neutral_white};
`

const DefaultInput = styled.input`
  border-color: transparent;
  padding: 0.5rem 1rem 0.5rem ${props => props.type === "search" ? `2rem` : `1rem`};
  border-radius: ${props => props.theme.padding.baby};
  background-color: ${props => props.theme.colors.tertiary_mid_wod};
  color: ${props => props.theme.colors.neutral_white};
  font-family: ${props => props.theme.fonts.family.sans};
  font-weight: bold;
  width: ${props => props.type !== "search" ? "auto" : props.value && props.value.length ? maxWidth : `125px`};
  &:hover,
  &:focus {
    width: ${props => props.type !== "search" ? "auto" :maxWidth};
  }
  ${props => handleShadow(props)};
  ${props => handleFocus(props)};
  ${props => handleWhiteTextOnDark(props, true)};
  transition: all 500ms ease-in-out !important;
`

const InputContainer = styled.div`
  position: relative;
`

const useInput = ({ type, value, setValue, ...props }) => {
  return {
    value,
    renderInput: () => (
      <InputContainer>
        {type === "search" && <SearchIcon size="1rem" title="search icon" />}
        <DefaultInput {...props} type={type} value={value} onChange={(e) => setValue(e.target.value)}/>
      </InputContainer>
    ),
  }
}

export default useInput
