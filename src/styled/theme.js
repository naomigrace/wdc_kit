export default {
  breakpoints: {
    phone_portrait: `@media only screen and (max-width : 320px)`,
    phone_landscape: `@media only screen and (min-width : 321px)`,
    sweet_spot: `@media only screen and (max-width : 1024px)`,
    tablet: `@media only screen and (min-width: 768px)`,
    tablet_landscape: `@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)`,
    tablet_portrait: `@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait)`,
    desktop: `@media only screen and (min-width: 1024px)`,
    largeScreen: `@media only screen and (min-width : 1440px)`,
  },
  fonts: {
    family: {
      serif: `Georgia, Cambria, "Times New Roman", Times, serif`,
      sans: `'Poppins', sans-serif`,
      display: `'Rozha One', serif`,
    },
    size: {
      sm: `0.75rem`,
      base: `1rem`,
      md: `1.25rem`,
      lg: `1.5rem`,
      xl: `1.75rem`,
      xxl: `2rem`,
      logo: `1.45rem`
    },
  },
  colors: {
    //focus
    "focus": `rgba(79, 190, 255, 0.6)`,
    // purple
    "primary_lightest": `rgb(234, 230, 255)`,
    "primary_light": `rgb(192, 182, 242)`,
    "primary_mid_wod": `rgb(101, 84, 192)`,
    "primary_dark_wod": `rgb(82, 67, 170)`,
    "primary_darkest_wod": `rgb(64, 50, 148)`,

    // orange-red
    "secondary_orange_wod": `rgb(254, 106, 62)`,
    "secondary_peach_wod": `rgb(255, 62, 85)`,

    // navy blue
    "tertiary_mid_wod": `rgb(23, 43, 77)`,

    // grey-blue
    "neutral_black_wod": `rgb(52, 53, 59)`,
    "neutral_mid_wod": `rgb(103, 117, 143)`,
    "neutral_mid": `rgb(206, 217, 235)`,
    "neutral_grey": `rgb(228, 228, 228)`,
    "neutral_light": `rgb(240, 243, 249)`,
    "neutral_white": `rgb(255, 255, 255)`,

    // tags
    music_wod: `rgb(255, 62, 85)`, // secondary_peach_wod
    comedy_wod: `rgb(254, 106, 62)`, // secondary_orange_wod
    culture_wod: `rgb(60, 132, 224)`,
    sports_wod: `rgb(41, 171, 76)`,
    community_wod: `rgb(101, 84, 192)`, // primary_mid_wod
  },
  gradients: {
      solid_white: `rgb(255, 255, 255), rgb(255, 255, 255)`,
      primary_wod: `rgb(101, 84, 192), rgb(64, 50, 148)`, 
      primary_opaque_wod: `rgba(101, 84, 192, 0.95), rgba(64, 50, 148, 0.65)`, 
      secondary_wod: `rgb(255, 87, 54), rgb(255, 65, 62)`,
      secondary_opaque_wod: `rgba(255, 65, 62, 0.95), rgba(255, 87, 54, 0.75)`,
      secondary_peach_wod: `rgb(255, 62, 85, 1), rgb(255, 62, 85, 0.95)`,
      secondary_peach_wod_opaque: `rgb(255, 62, 85, 0.95), rgb(255, 62, 85, 0.65)`,
      tertiary_wod: `rgb(23, 43, 77), rgb(64, 50, 148)`,
      neutral_dark_wod: `rgb(23, 43, 77), rgb(52, 53, 59)`,
      neutral: `rgb(255, 255, 255), rgb(206, 217, 235)`,
      neutral_opaque_hover: `rgba(255, 255, 255, 1), rgba(206, 217, 235, 0.3)`,
      neutral_opaque: `rgba(255, 255, 255, 1), rgba(206, 217, 235, 0.2)`,
      neutral_light: `rgb(240, 243, 249), rgba(206, 217, 235, 0.6)`,
  },
  widths: {
    itty: `1px`,
    mini: `3px`,
    chubby: `5px`,
  },
  padding: {
    mini: `8px`,
    chubby: `20px`,
    baby: `40px`
  },
  radius: {
    none: `0`,
    mini: `5px`,
    chubby: `15px`,
    baby: `30px`
  },
  shadows: {
    xs: `0 0 0 1px rgba(0,0,0,.05)`,
    sm: `0 1px 2px 0 rgba(0,0,0,.05)`,
    base: `0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)`,
    base_reverse: `0 -1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)`,
    md: `0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)`,
    md_reverse: `0 -4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)`,
    lg: `0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)`,
    xl: `0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)`,
    xxl: `0 25px 50px -12px rgba(0,0,0,.25)`
  },
}
