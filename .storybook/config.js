import { configure, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import themeDecorator from "./themeDecorator"

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module)
addDecorator(themeDecorator)
