import chroma from "chroma-js"

export const dateTimeStyles = {
  style: {
    flexGrow: 1,
    borderRadius: 0,
    maxWidth: 200,
  },
}

export const tagInputStyles = {
  container: provided => ({ ...provided, flexGrow: "1" }),
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
  multiValueLabel: (styles, { data }) => {
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
