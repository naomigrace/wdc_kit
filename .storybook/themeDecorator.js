import React from "react"
import { ThemeProvider } from "styled-components"
import "../src/sheets/normalize.css"
import "../src/sheets/typography.css"
import theme from "../src/styled/theme"

const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>

export default ThemeDecorator