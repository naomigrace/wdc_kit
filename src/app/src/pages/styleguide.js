import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SquareBox from "../ui/SquareBox"
import Flex from "../ui/Flex"

const StyleGuide = () => (
  <Layout>
    <SEO title="Style Guide for Just Wanna DC" />
    <h1>Mood</h1>
    <p>Mostly modern, with traditional elements. Fun and irreverent, but not too irreverent.</p>
    <h1>Fonts</h1>
    <h2 style={{fontFamily: 'Shrikhand, display'}}>Shrikhand</h2>
    <h1>Colors</h1>
    <Flex>
      <SquareBox color={"red"}><p>red</p></SquareBox>
      <SquareBox color={"white"}><p>white</p></SquareBox>
      <SquareBox color={"blue"}><p style={{color: "white"}}>blue</p></SquareBox>
    </Flex>
  </Layout>
)

export default StyleGuide
