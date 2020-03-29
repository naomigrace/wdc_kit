import styled from "styled-components"

import Image930 from "../images/venue__930.jpg"
import ImageBlackCat from "../images/venue_blackcat.jpg"
import ImageEchoStage from "../images/venue_echostage.jpg"
import ImageHowardTheatre from "../images/venue_howardtheatre.jpg"
import ImagePearlStreet from "../images/venue_pearlstreet.jpg"
import ImageSongbyrd from "../images/venue_songbyrd.jpg"
import ImageUnionStage from "../images/venue_unionstage.jpg"
import ImageUStreet from "../images/venue_ustreet.jpeg"
import ImageVelvetLounge from "../images/venue_velvetlounge.jpg"
import ImageAnthem from "../images/venue_anthem.jpg"

const imageResolver = venue => {
  return {
    _930: Image930,
    blackcat: ImageBlackCat,
    echostage: ImageEchoStage,
    howardtheatre: ImageHowardTheatre,
    pearlstreet: ImagePearlStreet,
    songbyrd: ImageSongbyrd,
    unionstage: ImageUnionStage,
    ustreet: ImageUStreet,
    velvetlounge: ImageVelvetLounge,
    theanthem: ImageAnthem,
  }[venue]
}

export const PopupImage = styled.div`
  background-image: url(${props => imageResolver(props.venue)});
  background-size: cover;
  background-position-y: center;
  height: 50px;
`

export default styled.div`
  h1,
  h2 {
    margin-top: 0;
    padding: 0 10px 0 10px;
  }
  h2 {
    color: ${props => props.theme.red};
    padding-top: 10px;
    font-size: 0.75rem;
    text-transform: uppercase;
  }
  h1 {
    margin-top: 4px;
    font-size: 1.25rem;
  }
`
