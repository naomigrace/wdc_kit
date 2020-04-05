import chroma from "chroma-js"
import styled from "styled-components"

export const dateTimeStyles = {
  id: "search-date",
  style: {
    flexGrow: 1,
    borderRadius: 0,
    minWidth: 200,
  },
}

export const tagInputStyles = {
  container: provided => ({
    ...provided,
    flexGrow: "1",
    minWidth: 320,
  }),
  control: provided => ({
    ...provided,
    height: "100%",
    borderRadius: 0,
  }),
  multiValue: (styles, { data }) => {
    const color = data.color ? chroma(data.color) : chroma("#000")
    return {
      ...styles,
      backgroundColor: color.alpha(0.2).css(),
    }
  },
  multiValueLabel: (styles) => {
    return {
      ...styles,
      fontWeight: "bold",
    }
  },
}

export const priceInputStyles = {
  container: provided => ({ ...provided, flexGrow: "1", maxWidth: 150 }),
  control: provided => ({
    ...provided,
    height: "100%",
    minWidth: 150,
    borderRadius: 0,
    marginRight: 0,
  }),
  menu: provided => ({
    ...provided,
    minWidth: 150,
  }),
}

export default styled.div`
  z-index: 900;
  position: fixed;
  right: 0px;
  padding: 20px;
  top: ${props => props.isMobile ? `300px`: `0px`};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
