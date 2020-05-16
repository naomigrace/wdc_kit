import React from "react"
import { P } from "../index"
import ScrollWrapper from "../components/ScrollWrapper"

export default {
    title: "Scroll Wrapper",
}

export const ExampleOfScrollWrapper = () => {

const LotsOfText = () => <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae suscipit tellus mauris a diam maecenas. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Vestibulum lectus mauris ultrices eros in. Posuere morbi leo urna molestie at elementum. Tortor consequat id porta nibh venenatis cras sed felis. Et magnis dis parturient montes nascetur. Massa enim nec dui nunc. Massa massa ultricies mi quis. Cras ornare arcu dui vivamus arcu felis. Lectus quam id leo in vitae turpis massa.

    Sociis natoque penatibus et magnis dis. Auctor neque vitae tempus quam pellentesque. Quisque sagittis purus sit amet. Egestas congue quisque egestas diam. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Aliquam sem fringilla ut morbi tincidunt augue. Justo eget magna fermentum iaculis eu non diam. Tellus integer feugiat scelerisque varius morbi. Quam pellentesque nec nam aliquam. Interdum velit laoreet id donec ultrices. Erat pellentesque adipiscing commodo elit. Ullamcorper dignissim cras tincidunt lobortis. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Tellus pellentesque eu tincidunt tortor aliquam.
    
    Ut ornare lectus sit amet est placerat in egestas erat. Convallis posuere morbi leo urna molestie at elementum eu. Leo duis ut diam quam nulla porttitor massa id. Tortor posuere ac ut consequat semper viverra nam libero. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Habitant morbi tristique senectus et netus et malesuada fames. Nisi quis eleifend quam adipiscing vitae proin. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Augue eget arcu dictum varius duis at consectetur. Integer vitae justo eget magna. Ultrices tincidunt arcu non sodales neque sodales ut. Eu consequat ac felis donec et odio. Bibendum enim facilisis gravida neque convallis a cras semper. Gravida neque convallis a cras semper. Aliquam ultrices sagittis orci a scelerisque purus semper. Aliquam sem fringilla ut morbi tincidunt augue. Justo donec enim diam vulputate. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Ac tincidunt vitae semper quis lectus nulla at volutpat. Congue quisque egestas diam in arcu cursus euismod.
    
    Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Sociis natoque penatibus et magnis dis parturient. Mauris nunc congue nisi vitae. Est ante in nibh mauris cursus mattis. Lectus urna duis convallis convallis tellus. At elementum eu facilisis sed odio morbi quis commodo odio. Suspendisse potenti nullam ac tortor vitae purus. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Commodo elit at imperdiet dui accumsan sit amet nulla. Mi bibendum neque egestas congue quisque egestas. Etiam sit amet nisl purus in mollis nunc. Integer quis auctor elit sed vulputate mi sit. Quam adipiscing vitae proin sagittis nisl. In nisl nisi scelerisque eu ultrices vitae auctor. Ac placerat vestibulum lectus mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada. Lacinia at quis risus sed vulputate odio ut enim.
    
    Faucibus et molestie ac feugiat sed lectus. Urna molestie at elementum eu facilisis sed. Pharetra convallis posuere morbi leo urna. Tempor id eu nisl nunc mi ipsum faucibus. Donec enim diam vulputate ut pharetra sit amet aliquam. Non enim praesent elementum facilisis leo vel. Et malesuada fames ac turpis. Interdum varius sit amet mattis vulputate enim nulla aliquet. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum.</P>

    return <ScrollWrapper style={{height: `350px`, position: `relative`}}>{LotsOfText()}</ScrollWrapper>
}