import React from "react"
import { HomePageContainer, Box } from "../../index"
import { TraySample } from "./Tray.stories"

export default {
    title: "Home Page Container",
    component: HomePageContainer
}

export const HomePageContainerExample = () => (
    <HomePageContainer>
        <Box color={`neutral_mid`} radius={`none`} style={{height: `100%`}}/>
        <TraySample/>
    </HomePageContainer>
)

