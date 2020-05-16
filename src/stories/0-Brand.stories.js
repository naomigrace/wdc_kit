import React from "react"
import theme from "../styled/theme"
import { Box, BoxGradient, FlexContainer } from "../../index"

export default {
  title: "Brand",
  component: Box,
}

export const colors = () => (
  <FlexContainer directionColumn={true}>
    {Object.keys(theme.colors).map((color) => (
      <Box key={color} color={color} padding={`chubby`} style={{ marginBottom: `10px` }}>
        {color}
      </Box>
    ))}
  </FlexContainer>
)

export const gradients = () => (
  <FlexContainer directionColumn={true}>
  {Object.keys(theme.gradients).map(gradient => (
    <BoxGradient key={gradient} gradient={gradient} padding={`chubby`} style={{ marginBottom: `10px` }}>
      {gradient}
    </BoxGradient>
  ))}
</FlexContainer>
)

export const shadows = () => (
  <FlexContainer wrapWrap>
  {Object.keys(theme.shadows).map(shadow => (
    <BoxGradient key={shadow} shadow={shadow} gradient={"neutral_opaque"} padding={`chubby`} style={{ margin: `30px`, flexWidth: `100px` }}>
      {shadow}
    </BoxGradient>
  ))}
</FlexContainer>
)

export const typography = () => (
  <FlexContainer directionColumn={true}>
    {Object.keys(theme.fonts.family).map(fontFamily => (
      <h1 key={fontFamily} style={{ fontFamily: theme.fonts.family[fontFamily] }}>
        District of Columbia
      </h1>
    ))}
  </FlexContainer>
)

