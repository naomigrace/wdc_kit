import React from "react"
import NotFound404 from "../components/NotFound"
import CenterContainer from "../styled/CenterContainer"

export default {
  title: "Not Found",
  component: NotFound404,
}

export const NotFoundComponent = () => (
  <CenterContainer>
    <NotFound404 />
  </CenterContainer>
)
