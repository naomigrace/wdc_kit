import { transparentize } from "polished"
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

export const imageResolver = venue => {
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

export const handleIconStyle = props => `
  color: ${
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.neutral_white
  };
  `

export const handleWhiteTextOnDark = (props, force) =>
  (props.color && props.color.indexOf("_wod") > -1) ||
  (props.gradient && props.gradient.indexOf("_wod") > -1) ||
  props.whiteOnDark ||
  force
    ? `color: ${props.theme.colors.neutral_white} !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;`
    : props.theme.colors.neutral_black_wod

export const buttonBase = props => `
  display: inline-block;
  padding: ${props.icon ? `0` : props.small ? `0.5rem 1rem` : `1rem 2rem`};
  ${
    props.icon && props.small
      ? `width: 30px; height: 30px;`
      : props.icon && `width: 60px; height: 60px;`
  }
  font-size: ${
    props.icon
      ? props.small
        ? `0.5rem`
        : `0.75rem`
      : props.small
      ? `0.65rem`
      : `0.9rem`
  } !important;
  border-radius: ${props.icon ? `50%` : props.theme.radius.baby};
  margin-right: ${props.theme.widths.chubby};
  text-decoration: none;
  font-weight: ${props.bold ? `bold` : `regular`};
  line-height: 1;
  cursor: ${!props.disabled ? `pointer` : `not-allowed`};
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    outline: none;
    ${!props.background && `transform: scale(0.98);`}
  }

  &:focus, &:active {
    outline: none;
    box-shadow: 0 0 0 ${props.theme.widths.mini} ${
  props.colors
    ? transparentize(0.41, props.theme.colors[props.color])
    : props.theme.colors.focus
};
  }
`

const getFontSize = props => {
  return props.size
    ? props.theme.fonts.size[props.size]
    : props.theme.fonts.size.base
}

export const handleSpacing = props => {
  return props.mb ? `margin-bottom: ${props.mb}rem` : 
  props.mt ? `margin-top: ${props.mt}rem` :
  props.mr ? `margin-right: ${props.mr}rem` :
  props.ml ? `margin-left: ${props.ml}rem` : ``
}

export const handleColor = props =>
  props.color ? `color: ${props.theme.colors[props.color]}` : `color: ${props.theme.colors.neutral_black_wod}`

export const handleFont = props =>
  props.serif ? handleSerifFont(props) : handleSansFont(props)

export const handleSansFont = props => `
  font-size: ${
    props.size ? getFontSize(props) : props.theme.fonts.size.regular
  };
  font-family: ${props.theme.fonts.family.sans};
  font-weight: ${
    props.bold
      ? `700`
      : `400`
  };
`

export const handleSerifFont = props => `
font-size: ${props.size ? getFontSize(props) : props.theme.fonts.size.regular};
font-family: ${props.theme.fonts.family.serif};
font-weight: ${
  props.bold
    ? `bold`
    : `regular`
};
`

export const handleShadow = props => `
  ${props.shadow && `box-shadow: ${props.theme.shadows[props.shadow]};`}
`
