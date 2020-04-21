import React from "react"
import theme from "../styled/theme"
import { Box, FlexContainer } from "../styled"

export default {
  title: "Brand",
  component: Box,
}

export const colors = () => (
  <FlexContainer directionColumn={true}>
    {Object.keys(theme.colors).map(color => (
      <Box color={color} padding={`chubby`} style={{ marginBottom: `10px` }}>
        {color}
      </Box>
    ))}
  </FlexContainer>
)

export const typography = () => (
  <FlexContainer directionColumn={true}>
    {Object.keys(theme.fonts.family).map(fontFamily => (
      <h1 style={{ fontFamily: theme.fonts.family[fontFamily] }}>
        wanna dc - {fontFamily}
      </h1>
    ))}
  </FlexContainer>
)
