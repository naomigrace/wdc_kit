import React from "react"
import { HomePageContainer } from "../../index"
import { TraySample } from "./Tray.stories"

export default {
    title: "Home Page Container",
    component: HomePageContainer
}

export const HomePageContainerExample = () => (
    <HomePageContainer>
        <div>
            Map goes here
        </div>
        <TraySample/>
    </HomePageContainer>
)

