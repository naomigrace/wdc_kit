import React from "react"
import { ThemeProvider } from "styled-components"
import "../src/styled/normalize.css"
import "../src/styled/typography.css"
import theme from "../src/styled/theme"

const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>

export default ThemeDecorator