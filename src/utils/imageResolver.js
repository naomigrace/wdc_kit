import Image930 from "../images/venue__930.jpg"
import ImageAfricanAmericanHistory from "../images/venue_africanamericanhistory.jpg"
import ImageAfricanArtMuseum from "../images/venue_africanartmuseum.jpg"
import ImageAirAndSpace from "../images/venue_airandspace.jpg"
import ImageAnacostiaArt from "../images/venue_anacostiaart.jpg"
import ImageCapitalPride from "../images/venue_capitalpride.jpg"
import ImageCapitolOne from "../images/venue_capitolone.jpg"
import ImageCityWinery from "../images/venue_citywinery.jpeg"
import ImageDC9 from "../images/venue_dc9.jpg"
import ImageDCImprov from "../images/venue_dcimprov.jpg"
import ImageBlackCat from "../images/venue_blackcat.jpg"
import ImageBossaDC from "../images/venue_bossadc.jpg"
import ImageEchoStage from "../images/venue_echostage.jpg"
import ImageFreerSackler from "../images/venue_freersackler.jpg"
import ImageTheHamilton from "../images/venue_thehamilton.jpg"
import ImageHowardTheatre from "../images/venue_howardtheatre.jpg"
import ImageKennedyCenter from "../images/venue_kennedycenter.jpg"
import ImageLincolnTheatre from "../images/venue_lincolntheatre.jpg"
import ImageNatsPark from "../images/venue_natspark.jpg"
import ImageNGA from "../images/venue_nga.jpg"
import ImagePearlStreet from "../images/venue_pearlstreet.jpg"
import ImagePieShop from "../images/venue_pieshop.jpg"
import ImagePoliticsProse from "../images/venue_politicsprose.jpeg"
import ImageSongbyrd from "../images/venue_songbyrd.jpg"
import ImageUnionStage from "../images/venue_unionstage.jpg"
import ImageUStreet from "../images/venue_ustreet.jpeg"
import ImageVelvetLounge from "../images/venue_velvetlounge.jpeg"
import ImageAnthem from "../images/venue_anthem.jpg"

import ImageAdmo from "../images/neighborhood_admo.jpg"
import ImageDtn from "../images/neighborhood_dtn.jpg"
import ImageDup from "../images/neighborhood_dup.jpg"
import ImageGeo from "../images/neighborhood_geo.jpg"
import ImageHst from "../images/neighborhood_hst.jpg"
import ImageIvy from "../images/neighborhood_ivy.jpg"
import ImageLog from "../images/neighborhood_log.jpg"
import ImageNav from "../images/neighborhood_nav.jpg"
import ImageNoma from "../images/neighborhood_noma.png"
import ImagePet from "../images/neighborhood_pet.jpg"
import ImageShaw from "../images/neighborhood_shaw.jpg"
import ImageSowe from "../images/neighborhood_sowe.jpeg"
import ImageUst from "../images/neighborhood_ust.jpg"
import ImageWdl from "../images/neighborhood_wdl.jpg"

const imageResolver = machine_name => {
  return {
    // venues
    _930: Image930,
    africanamericanhistory: ImageAfricanAmericanHistory,
    africanartmuseum: ImageAfricanArtMuseum,
    airandspacemuseum: ImageAirAndSpace,
    anacostiamuseum: ImageAnacostiaArt,
    blackcat: ImageBlackCat,
    bossadc: ImageBossaDC,
    capitalone: ImageCapitolOne,
    capitalpride: ImageCapitalPride,
    citywinery: ImageCityWinery,
    dc9: ImageDC9,
    dcimprov: ImageDCImprov,
    echostage: ImageEchoStage,
    freersackler: ImageFreerSackler,
    thehamilton: ImageTheHamilton,
    howardtheatre: ImageHowardTheatre,
    kennedycenter: ImageKennedyCenter,
    lincolntheatre: ImageLincolnTheatre,
    natspark: ImageNatsPark,
    nga: ImageNGA,
    pieshop: ImagePieShop,
    pearlstreet: ImagePearlStreet,
    politicsprose: ImagePoliticsProse,
    songbyrd: ImageSongbyrd,
    unionstage: ImageUnionStage,
    ustreet: ImageUStreet,
    velvetlounge: ImageVelvetLounge,
    theanthem: ImageAnthem,
    // neighborhoods
    admo: ImageAdmo,
    nav: ImageNav,
    dtn: ImageDtn,
    dup: ImageDup,
    geo: ImageGeo,
    hst: ImageHst,
    ivy: ImageIvy,
    log: ImageLog,
    noma: ImageNoma,
    pet: ImagePet,
    shaw: ImageShaw,
    sowe: ImageSowe,
    ust: ImageUst,
    wdl: ImageWdl,
  }[machine_name]
}

export default imageResolver
