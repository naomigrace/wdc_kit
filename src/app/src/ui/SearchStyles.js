import chroma from "chroma-js"
import styled from "styled-components"

export const dateTimeStyles = {
  id: "search-date",
  style: {
    flexGrow: 1,
    borderRadius: 0,
    maxWidth: 200,
  },
}

export const tagInputStyles = {
  container: provided => ({
    ...provided,
    flexGrow: "1",
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
    maxWidth: 150,
    borderRadius: 0,
    marginRight: 0,
  }),
  menu: provided => ({
    ...provided,
    maxWidth: 150,
  }),
}

export default styled.div`
  pointer-events: none;
  margin-bottom: 20px;
  ${props =>
    props.isMobile
      ? 
      `
      margin-top: 20px;
      left: 20px;
      display: flex;
      flex-direction: column;
      max-width: 325px;
      position: relative;
      #search-date, #search-filters, #search-price {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      #search-filters, #search-price {
        margin-top: 10px
      }
      `
      : 
      `
      position: fixed;
      top: 0;
      left: 55px;
      display: flex;
      margin: 20px 0;
      width: 100%;
      justify-content: space-between;
      flex-direction: row;
      max-width: 960px;
      box-shadow:
        0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
      `
}
`
