import React from "react"
import venues from "../data/venues"
import PopupHeader, { PopupImage } from "../ui/PopupHeader"

export default venue => {
  return (
    <PopupHeader venue={venue}>
      <header>
        <PopupImage venue={venue}/>
        <h2>music venue</h2>
        <h1>{venues[venue]}</h1>
      </header>
    </PopupHeader>
  )
}
