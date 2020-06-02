import React from "react"
import {
  Tray,
  TrayNavigation,
  TrayContent,
  FlexContainer,
  Label,
  Button,
} from "../index"
import EventStick from "../components/EventStick"
import ScrollWrapper from "../components/ScrollWrapper"

export default {
  title: "Tray",
  component: Tray,
}

const eventSample = [
  {
    "id": "100",
    "venue": "_930",
    "date": "2020-06-01T23:00:00.000Z",
    "time": "7 PM",
    "title": "Tycho (POSTPONED)",
    "title2": "Com Truise",
    "description": "This event has been postponed. Stay tuned for more details.*",
    "price": 35,
    "status": "Postponed",
    "link": "https://www.930.com/e/tycho-postponed--91344015409/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F89653747%2F237869940982%2F1%2Foriginal.20200127-214426?auto=compress&crop=top&fit=crop&h=200&w=300&s=732900bc116df71fffd64ac16313a3d1"
},
{
    "id": "160",
    "venue": "theanthem",
    "date": "2020-06-02T16:00:00.000Z",
    "title": "Kesha: The High Road Tour With Special Guest Big Freedia",
    "price": 57,
    "status": "CANCELLED",
    "link": "https://theanthemdc.com/event/kesha-the-high-road-tour-with-special-guest-big-freedia",
    "tickets": "https://www.ticketmaster.com/kesha-the-high-road-tour-with-washington-district-of-columbia-06-02-2020/event/15005796E2164D47",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/05/d297b6ca-e8bd-49f4-a20a-a94a7315059d_1296541_TABLET_LANDSCAPE_LARGE_16_9-768x432.jpg"
},
{
    "id": "101",
    "venue": "_930",
    "date": "2020-06-02T22:30:00.000Z",
    "time": "6:30 PM",
    "title": "mxmtoon",
    "title2": "Claud",
    "description": "This event has been postponed. Stay tuned for more details.*",
    "price": 20,
    "status": "Postponed",
    "link": "https://www.930.com/e/mxmtoon-postponed--90226340413/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F89037309%2F237869940982%2F1%2Foriginal.20200123-162908?auto=compress&crop=top&fit=crop&h=200&w=300&s=dfe0f5746fec9e973e3f6e9bc1cc7c1c"
},
{
  "id": "1630",
  "venue": "theanthem",
  "date": "2020-06-25T22:30:00.000Z",
  "time": "6:30PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 44,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-2",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-25-2021/event/1500575FBA1C3E79",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-3-768x432.jpg"
},
{
  "id": "1631",
  "venue": "theanthem",
  "date": "2020-06-26T16:30:00.000Z",
  "time": "12:30PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 44,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-3",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-26-2021/event/1500575FBC293ED3",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-4-768x432.jpg"
},
{
  "id": "1632",
  "venue": "theanthem",
  "date": "2020-06-26T22:30:00.000Z",
  "time": "6:30PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 49,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-4",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-26-2021/event/1500575FC0884051",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-5-768x432.jpg"
},
{
  "id": "115",
  "venue": "blackcat",
  "date": "2020-06-27T16:00:00.000Z",
  "title": "TV GIRL",
  "title2": "has cancelled. Online purchases refunded automatically. Please return to place of purchase for all other refunds.",
  "img": "http://www.blackcatdc.com/images/460/tv-girl.jpg"
},
{
  "id": "1633",
  "venue": "theanthem",
  "date": "2020-06-27T16:30:00.000Z",
  "time": "12:30PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 44,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-5",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-27-2021/event/1500575FC39641D5",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-6-768x432.jpg"
},
{
  "id": "1634",
  "venue": "theanthem",
  "date": "2020-06-27T22:00:00.000Z",
  "time": "6:00PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 44,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-6",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-27-2021/event/1500575FC6644277",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-768x432.jpg"
},
{
  "id": "107",
  "venue": "_930",
  "date": "2020-06-28T00:00:00.000Z",
  "time": "8 PM",
  "title": "Chicano Batman",
  "title2": "Le Butcherettes",
  "description": "This event has been postponed. Stay tuned for more details.*",
  "price": 20,
  "status": "Postponed",
  "link": "https://www.930.com/e/chicano-batman-postponed--96111354649/",
  "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F93901521%2F237869940982%2F1%2Foriginal.20200224-182432?auto=compress&crop=top&fit=crop&h=200&w=300&s=34c250eecaa7cab11e4fb65b66fa51d3"
},
{
  "id": "188",
  "venue": "ustreet",
  "date": "2020-06-28T02:30:00.000Z",
  "time": "10:30 PM",
  "title": "Noisia (POSTPONED)",
  "title2": "Droosie, Brothers Brau, Humdinga, Jungle Jessi b2b Selva Masseve, Hosted by Dvine MC",
  "description": "This show is postponed. Stay tuned for more details.",
  "price": 35,
  "status": "Postponed",
  "link": "https://www.ustreetmusichall.com/e/noisia-postponed--92899997393/",
  "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F95559521%2F335419353173%2F1%2Foriginal.20200305-181352?auto=compress&crop=top&fit=crop&h=200&w=300&s=a277579655245cda08d5c1752d8ca2e0"
},
{
  "id": "116",
  "venue": "blackcat",
  "date": "2020-06-28T16:00:00.000Z",
  "title": "ANAMANAGUCHI",
  "title2": "has postponed. New date announced soon. Refunds available when new date is announced.",
  "img": "http://www.blackcatdc.com/images/460/anamanaguchi.jpg"
},
{
  "id": "1635",
  "venue": "theanthem",
  "date": "2020-06-29T22:00:00.000Z",
  "time": "6:00PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 44,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-7",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-29-2021/event/1500575FCB024470",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-1-768x432.jpg"
},
{
  "id": "108",
  "venue": "_930",
  "date": "2020-06-29T23:00:00.000Z",
  "time": "7 PM",
  "title": "The Naked And Famous",
  "title2": "Circa Waves, Luna Shadows",
  "description": "This event has been cancelled. Please check your email for refund information.*",
  "price": 30,
  "status": "Canceled",
  "link": "https://www.930.com/e/the-naked-and-famous-cancelled--98527001915/",
  "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F95736263%2F237869940982%2F1%2Foriginal.20200306-190054?auto=compress&crop=top&fit=crop&h=200&w=300&s=fbe2e51ec0f528cc984bf7e338c0ed6a"
},
{
  "id": "1636",
  "venue": "theanthem",
  "date": "2020-06-30T22:00:00.000Z",
  "time": "6:00PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 44,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-8",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-30-2021/event/1500575FCE91456D",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-7-768x432.jpg"
},
{
  "id": "15448",
  "venue": "songbyrd",
  "title": "JESSIE REYEZ @ FILLMORE SILVER SPRING *POSTPONED*",
  "description": "JESSIE REYEZ @ FILLMORE SILVER SPRING *POSTPONED* LiveNation and Songbyrd Present All Ages",
  "link": "https://www.songbyrddc.com/shows/2020-07-01-jessie-reyez-fillmore",
  "tickets": "https://www.fillmoresilverspring.com/EventDetail?tmeventid=1AvfZp7GkM0PJg5&offerid=120725",
  "date": "2020-07-01T16:00:00.000Z",
  "img": "https://www.songbyrddc.com/jessiereyez.jpg?Action=thumbnail&Width=400&algorithm=proportional"
},
{
  "id": "1637",
  "venue": "theanthem",
  "date": "2020-07-01T22:30:00.000Z",
  "time": "6:30PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 44,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-9",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-07-01-2021/event/1500575FD0A74611",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-8-768x432.jpg"
},
{
  "id": "1638",
  "venue": "theanthem",
  "date": "2020-07-02T16:30:00.000Z",
  "time": "12:30PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 44,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-10",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-07-02-2021/event/1500575FD306465D",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-9-768x432.jpg"
},
{
  "id": "1639",
  "venue": "theanthem",
  "date": "2020-07-02T22:30:00.000Z",
  "time": "6:30PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 44,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-11",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-07-02-2021/event/1500575FD65D47B6",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-10-768x432.jpg"
},
{
  "id": "1640",
  "venue": "theanthem",
  "date": "2020-07-03T16:30:00.000Z",
  "time": "12:30PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 44,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-12",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-07-03-2021/event/1500575FDA904C7D",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-11-768x432.jpg"
},
{
  "id": "1641",
  "venue": "theanthem",
  "date": "2020-07-03T22:30:00.000Z",
  "time": "6:30PM",
  "title": "Signature Theatre Presents Mamma Mia!",
  "price": 44,
  "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-13",
  "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-07-03-2021/event/1500575FDC454CDF",
  "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-12-768x432.jpg"
},
{
  "id": "192",
  "venue": "velvetlounge",
  "date": "2020-07-04T00:30:00.000Z",
  "title": "Jank Setup",
  "title2": "Cecily",
  "time": "8:30pm",
  "price": 8,
  "link": "http://velvetloungedc.com/"
},
{
  "id": "109",
  "venue": "_930",
  "date": "2020-07-05T02:00:00.000Z",
  "time": "10 PM",
  "title": "DiscoBENT",
  "title2": "JoAnn Fabrixx, Diyanna Monet, Lemz & KeenanOrr (Sleaze DJs), Performers: Pussy Noir and Jaxknife Complex",
  "description": "New Date! All original tickets will be honored.*",
  "price": 21,
  "link": "https://www.930.com/e/discobent-new-date--92366006211/",
  "tickets": "https://www.eventbrite.com/e/discobent-new-date-tickets-92366006211",
  "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F90819111%2F237869940982%2F1%2Foriginal.20200204-133150?auto=compress&crop=top&fit=crop&h=200&w=300&s=5128cf3459c82c56392b3cd9e6eee8b9"
},
{
    "id": "15438",
    "venue": "songbyrd",
    "title": "CAGED BYRD SERIES: AMERICAN TRAPPIST",
    "description": "CAGED BYRD SERIES: AMERICAN TRAPPIST Songbyrd Presents Via Instagram Live",
    "price": 0,
    "time": "8:00 PM",
    "link": "https://www.songbyrddc.com/shows/2020-06-02-AmericanTrappist",
    "tickets": "https://www.eventbrite.com/x/caged-byrd-series-feat-american-trappist-tickets-106816569234",
    "date": "2020-06-03T00:00:00.000Z",
    "img": "https://www.songbyrddc.com/cagedAT (1).png?Action=thumbnail&Width=400&algorithm=proportional"
},
{
    "id": "161",
    "venue": "theanthem",
    "date": "2020-06-03T21:30:00.000Z",
    "time": "5:30PM",
    "title": "Local Natives & Foals",
    "title2": "Cherry Glazerr",
    "price": 45,
    "status": "CANCELLED",
    "link": "https://theanthemdc.com/event/local-natives-foals",
    "tickets": "https://www.ticketmaster.com/local-natives-foals-washington-district-of-columbia-06-03-2020/event/15005768D4FFB00E",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/04/b3692ecf-9a3b-480c-8147-a57eef5b7625_969011_TABLET_LANDSCAPE_LARGE_16_9-768x432.jpg"
},
{
    "id": "180",
    "venue": "ustreet",
    "date": "2020-06-03T22:30:00.000Z",
    "time": "6:30 PM",
    "title": "Buy a U Hall Shirt or E-Gift Card in Our Online Store",
    "description": "Support U Hall's staff and operations by purchasing a t-shirt or e-gift card! Click the \"Tickets\" button to visit the store.",
    "price": 0,
    "ageRestriction": "All Ages",
    "link": "https://www.ustreetmusichall.com/e/buy-a-u-hall-shirt-or-e-gift-card-in-our-online-store-106447553498/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101669142%2F335419353173%2F1%2Foriginal.20200523-012044?auto=compress&crop=top&fit=crop&h=200&w=300&s=91ee78d9d441bf5c50ec51d94aea926c"
},
{
    "id": "181",
    "venue": "ustreet",
    "date": "2020-06-03T23:00:00.000Z",
    "time": "7 PM",
    "title": "Tall Heights",
    "title2": "Victoria Canal",
    "description": "This event has been cancelled. Check your email for refund information.*",
    "price": 15,
    "status": "Canceled",
    "ageRestriction": "All Ages",
    "link": "https://www.ustreetmusichall.com/e/tall-heights-cancelled--83410518105/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F82372243%2F350041607443%2F1%2Foriginal.20191123-004002?auto=compress&crop=top&fit=crop&h=200&w=300&s=149f98464354d3e9177bb7b3f8839da9"
},
{
    "id": "15439",
    "venue": "songbyrd",
    "title": "THE COATHANGERS *Postponed*",
    "description": "THE COATHANGERS *Postponed* Songbyrd Presents Downstairs, All Ages",
    "price": 18,
    "time": "8:00 PM",
    "link": "https://www.songbyrddc.com/shows/2020-06-04-the-coathangers",
    "tickets": "https://www.eventbrite.com/e/the-coathangers-tickets-96162967023",
    "date": "2020-06-05T00:00:00.000Z",
    "img": "https://www.songbyrddc.com/thecoathangers.jpg?Action=thumbnail&Width=400&algorithm=proportional"
},
{
    "id": "170",
    "venue": "unionstage",
    "date": "2020-06-05T01:30:00.000Z",
    "time": "9:30 PM",
    "title": "CANCELLED | Star Kitchen",
    "status": "Canceled",
    "ageRestriction": "All Ages",
    "link": "https://www.unionstage.com/e/star-kitchen-102190576766/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98201394%2F324124700193%2F1%2Foriginal.20200407-172629?auto=compress&fit=clip&h=&w=500&s=7e44eba9f6b2b77d36c3fa3897c0293d"
},
{
    "id": "15440",
    "venue": "songbyrd",
    "title": "FREE FLOW FRIDAYS",
    "description": "FREE FLOW FRIDAYS SONGBYRD AND @MARY2THEGAME PRESENT VIA INSTAGRAM LIVE",
    "price": 0,
    "time": "12:00 PM",
    "link": "https://www.songbyrddc.com/shows/2020-06-05-FreeFlowFridays",
    "tickets": "https://www.facebook.com/events/2044090372401479/",
    "date": "2020-06-05T16:00:00.000Z",
    "img": "https://www.songbyrddc.com/FreeFlow.png?Action=thumbnail&Width=400&algorithm=proportional"
},
{
    "id": "162",
    "venue": "theanthem",
    "date": "2020-06-05T22:30:00.000Z",
    "time": "6:30PM",
    "title": "Kaytranada – POSTPONED, NEW DATE TBA",
    "link": "https://theanthemdc.com/event/kaytranada-postponed-new-date-tba",
    "tickets": "https://www.ticketmaster.com/event/1500583FE8AE713A",
    "img": "background-image: url();"
},
{
    "id": "182",
    "venue": "ustreet",
    "date": "2020-06-05T22:30:00.000Z",
    "time": "6:30 PM",
    "title": "KAYTRANADA (POSTPONED)",
    "title2": "Stwo",
    "description": "This event is at The Anthem.",
    "price": 35,
    "status": "Postponed",
    "ageRestriction": "All Ages",
    "link": "https://www.ustreetmusichall.com/e/kaytranada-bubba-north-american-tour-postponed--92764221283/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F90675191%2F335419353173%2F1%2Foriginal.20200203-181044?auto=compress&crop=top&fit=crop&h=200&w=300&s=788de190c72fd1b29bd47ac209136456"
},
{
    "id": "183",
    "venue": "ustreet",
    "date": "2020-06-05T23:00:00.000Z",
    "time": "7 PM",
    "title": "City of the Sun (CANCELLED)",
    "description": "This event has been cancelled. Check your email for refund information.*",
    "price": 15,
    "status": "Canceled",
    "ageRestriction": "All Ages",
    "link": "https://www.ustreetmusichall.com/e/city-of-the-sun-cancelled--77221588851/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F77113595%2F350041607443%2F1%2Foriginal.20191016-213750?auto=compress&crop=top&fit=crop&h=200&w=300&s=4255b62b5b05c4490c49d4bcbab43344"
},
{
    "id": "171",
    "venue": "unionstage",
    "date": "2020-06-06T01:00:00.000Z",
    "time": "9 PM",
    "title": "POSTPONED | White Ford Bronco: DC's All 90s Band",
    "status": "Postponed",
    "ageRestriction": "All Ages",
    "link": "https://www.unionstage.com/e/white-ford-bronco-dc-s-all-s-band-102266558028/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98273690%2F324124700193%2F1%2Foriginal.20200408-150904?auto=compress&fit=clip&h=&w=500&s=27b94a8733ba617f191843346b6cabad"
},
{
    "id": "112",
    "venue": "blackcat",
    "date": "2020-06-06T16:00:00.000Z",
    "title": "NILÜFER YANYA",
    "title2": "has postponed. New date announced soon. Refunds available when new date is announced.",
    "img": "http://www.blackcatdc.com/images/460/nilufer-yanya-thumb.jpg"
},
{
    "id": "15441",
    "venue": "songbyrd",
    "title": "SNOTTY NOSE REZ KIDS *POSTPONED*",
    "description": "SNOTTY NOSE REZ KIDS *POSTPONED* Songbyrd and LiveNation Present Downstairs, All Ages",
    "link": "https://www.songbyrddc.com/shows/2020-06-06-snotty-nose-rez-kids",
    "tickets": "https://www.eventbrite.com/e/songbyrd-presents-snotty-nose-rez-kids-tickets-92953256693",
    "date": "2020-06-06T16:00:00.000Z",
    "img": "https://www.songbyrddc.com/snrk.jpg?Action=thumbnail&Width=400&algorithm=proportional"
},
{
    "id": "102",
    "venue": "_930",
    "date": "2020-06-07T00:00:00.000Z",
    "time": "8 PM",
    "title": "Stormzy",
    "description": "This event has been postponed. Stay tuned for more details.*",
    "price": 30,
    "status": "Postponed",
    "link": "https://www.930.com/e/stormzy-postponed--83657569041/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F82697391%2F237869940982%2F1%2Foriginal.20191126-171410?auto=compress&crop=top&fit=crop&h=200&w=300&s=165a9285f2e5cbc0f42c44b7bdaa14fc"
},
{
    "id": "113",
    "venue": "blackcat",
    "date": "2020-06-07T16:00:00.000Z",
    "title": "PROTOMARTYR",
    "title2": "has cancelled. Online purchases refunded automatically. Please return to place of purchase for all other refunds.",
    "img": "http://www.blackcatdc.com/images/460/protomartyr.jpg"
},
{
    "id": "163",
    "venue": "theanthem",
    "date": "2020-06-07T16:00:00.000Z",
    "title": "Violent Femmes and X – POSTPONED, NEW DATE TBA",
    "link": "https://theanthemdc.com/event/violent-femmes-and-x-postponed-new-date-tba",
    "tickets": "https://www.ticketmaster.com/event/1500585BAF033A6A",
    "img": "background-image: url();"
},
{
    "id": "184",
    "venue": "ustreet",
    "date": "2020-06-08T23:00:00.000Z",
    "time": "7 PM",
    "title": "Yaeji (at 9:30 Club) - (POSTPONED)",
    "title2": "Jessy Lanza",
    "description": "Yaeji has partnered with PLUS1 so that $1 from every ticket goes toward supporting the health, safety, and wellbeing of LGBTQ+ people",
    "price": 31,
    "status": "Postponed",
    "ageRestriction": "All Ages",
    "link": "https://www.ustreetmusichall.com/e/yaeji-w-jessy-lanza-at-club-postponed--99147303253/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F96169165%2F335419353173%2F1%2Foriginal.20200310-151834?auto=compress&crop=top&fit=crop&h=200&w=300&s=2349ed088e2687378ab269b87626f0ef"
},
{
    "id": "103",
    "venue": "_930",
    "date": "2020-06-08T23:00:00.000Z",
    "time": "7 PM",
    "title": "Yaeji (POSTPONED)",
    "title2": "Jessy Lanza",
    "description": "This event has been postponed. Stay tuned for more details.*",
    "price": 31,
    "status": "Postponed",
    "link": "https://www.930.com/e/yaeji-postponed--99088966767/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F96174565%2F237869940982%2F1%2Foriginal.20200310-154558?auto=compress&crop=top&fit=crop&h=200&w=300&s=bc8e157d6af777bf0e0c40edfe978453"
},
{
    "id": "15442",
    "venue": "songbyrd",
    "title": "99 NEIGHBORS *POSTPONED*",
    "description": "99 NEIGHBORS *POSTPONED* Songbyrd Presents Downstairs, All Ages",
    "link": "https://www.songbyrddc.com/shows/2020-06-09-99-neighbors",
    "tickets": "https://www.eventbrite.com/e/songbyrd-presents-99-neighbors-tickets-95276361161",
    "date": "2020-06-09T16:00:00.000Z",
    "img": "https://www.songbyrddc.com/99neighborsDC.jpg?Action=thumbnail&Width=400&algorithm=proportional"
},
{
    "id": "185",
    "venue": "ustreet",
    "date": "2020-06-10T23:00:00.000Z",
    "time": "7 PM",
    "title": "slowthai (CANCELLED)",
    "description": "This event has been cancelled. Check your email for more information.*",
    "price": 20,
    "status": "Canceled",
    "ageRestriction": "All Ages",
    "link": "https://www.ustreetmusichall.com/e/slowthai-cancelled--96538267557/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F93936401%2F237869940982%2F1%2Foriginal.20200224-210639?auto=compress&crop=top&fit=crop&h=200&w=300&s=857c49ee9609f32c218411b46111bb3c"
},
{
    "id": "15443",
    "venue": "songbyrd",
    "title": "HOLY FUCK *POSTPONED*",
    "description": "HOLY FUCK *POSTPONED* Songbyrd Presents Downstairs, All Ages",
    "link": "https://www.songbyrddc.com/shows/2020-06-11-holy-fuck",
    "tickets": "https://www.eventbrite.com/e/songbyrd-presents-holy-fuck-tickets-98488593033",
    "date": "2020-06-11T16:00:00.000Z",
    "img": "https://www.songbyrddc.com/holyfuck.png?Action=thumbnail&Width=400&algorithm=proportional"
},
{
    "id": "104",
    "venue": "_930",
    "date": "2020-06-11T23:00:00.000Z",
    "time": "7 PM",
    "title": "EOB (POSTPONED)",
    "description": "This event has been postponed. Stay tuned for more details.*",
    "price": 37,
    "status": "Postponed",
    "link": "https://www.930.com/e/eob-postponed--94439843113/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F92614691%2F237869940982%2F1%2Foriginal.20200215-003455?auto=compress&crop=top&fit=crop&h=200&w=300&s=c084539a0b3c190deea1f807fefacfbb"
},
{
    "id": "172",
    "venue": "unionstage",
    "date": "2020-06-12T00:00:00.000Z",
    "time": "8 PM",
    "title": "LA TI DO Presents Margo Seibert",
    "status": "Postponed",
    "ageRestriction": "All Ages",
    "link": "https://www.unionstage.com/e/la-ti-do-presents-margo-seibert-102395036310/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98384938%2F324124700193%2F1%2Foriginal.20200409-220106?auto=compress&fit=clip&h=&w=500&s=10c555b27010a2926a832a46320f22b6"
},
{
    "id": "190",
    "venue": "velvetlounge",
    "date": "2020-06-13T00:30:00.000Z",
    "title": "cancelled",
    "title2": "Deadbeat holiday Middle age brigade LNT Bake sale hotties",
    "time": "8:30pm",
    "price": 10,
    "link": "http://velvetloungedc.com/"
},
{
    "id": "120",
    "venue": "echostage",
    "date": "2020-06-13T01:00:00.000Z",
    "time": "9 PM",
    "title": "Capital Pride Presents RIOT!",
    "price": 25,
    "status": "Canceled",
    "ageRestriction": "Ages 18+",
    "link": "http://www.echostage.com/e/capital-pride-presents-riot--98723912881/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F95775551%2F259354050344%2F1%2Foriginal.20200306-233033?auto=compress&crop=top&fit=crop&h=433&w=650&s=825abb868e6f0de0fa7194d60db18f3c"
},
{
    "id": "143",
    "venue": "pearlstreet",
    "date": "2020-06-13T16:00:00.000Z",
    "time": "8 PM",
    "title": "The Vegabonds + Mike & The Moonpies",
    "price": 20,
    "ageRestriction": "Ages 21+",
    "link": "https://www.pearlstreetwarehouse.com/e/the-vegabonds-mike-the-moonpies-98028924151/",
    "tickets": "https://www.eventbrite.com/e/the-vegabonds-mike-the-moonpies-tickets-98028924151",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F95172439%2F277252843955%2F1%2Foriginal.20200303-181009?auto=compress&crop=top&fit=crop&h=133&w=200&s=593586b599b588cedc4894b1d22b76d3"
},
{
    "id": "164",
    "venue": "theanthem",
    "date": "2020-06-14T16:00:00.000Z",
    "title": "Car Seat Headrest",
    "title2": "Twin Peaks",
    "price": 35,
    "status": "CANCELLED",
    "link": "https://theanthemdc.com/event/car-seat-headrest",
    "tickets": "https://www.ticketmaster.com/car-seat-headrest-washington-district-of-columbia-06-14-2020/event/150058570A03582F",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/04/347381ea-2e30-4dab-8e50-43ffe10ad3d5_1301671_TABLET_LANDSCAPE_LARGE_16_9-768x432.jpg"
},
{
    "id": "121",
    "venue": "echostage",
    "date": "2020-06-14T17:00:00.000Z",
    "time": "1 PM",
    "title": "Henny&Waffles Brunch And Day Party",
    "price": 20,
    "status": "Canceled",
    "ageRestriction": "Ages 21+",
    "link": "http://www.echostage.com/e/henny-waffles-brunch-and-day-party-96366718449/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F93798529%2F259354050344%2F1%2Foriginal.20200224-024039?auto=compress&crop=top&fit=crop&h=433&w=650&s=9f61cfc6d213dad9769935393b109157"
},
{
    "id": "105",
    "venue": "_930",
    "date": "2020-06-14T23:00:00.000Z",
    "time": "7 PM",
    "title": "Jeremy Zucker (POSTPONED)",
    "title2": "cehryl",
    "description": "This event has been postponed. Stay tuned for more details.*",
    "price": 25,
    "status": "Postponed",
    "link": "https://www.930.com/e/jeremy-zucker-postponed--93960744115/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F92237797%2F237869940982%2F1%2Foriginal.20200212-194334?auto=compress&crop=top&fit=crop&h=200&w=300&s=0ddc1174d1e92060df94ac763a8e8a6e"
},
{
    "id": "15444",
    "venue": "songbyrd",
    "title": "DETERIORATION",
    "description": "DETERIORATION with Needle, Bottomfeeder and Ixias Songbyrd and Ripping Headaches Promotions Presents Downstairs, All Ages",
    "price": 10,
    "time": "8:00 PM",
    "link": "https://www.songbyrddc.com/shows/2020-06-14-deterioration",
    "tickets": "https://www.eventbrite.com/e/deterioration-tickets-97206201365",
    "date": "2020-06-15T00:00:00.000Z",
    "img": "https://www.songbyrddc.com/deterioration61420.png?Action=thumbnail&Width=400&algorithm=proportional"
},
{
    "id": "165",
    "venue": "theanthem",
    "date": "2020-06-16T22:30:00.000Z",
    "time": "6:30PM",
    "title": "Melanie Martinez: The K-12 Tour",
    "price": 50,
    "status": "CANCELLED",
    "link": "https://theanthemdc.com/event/melanie-martinez-the-k-12-tour",
    "tickets": "https://www.ticketmaster.com/melanie-martinez-the-k12-tour-washington-district-of-columbia-06-16-2020/event/15005846A0802DCA",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/04/96bde042-0758-4623-b61f-eef67c5449ce_1305651_TABLET_LANDSCAPE_LARGE_16_9-768x432.jpg"
},
{
    "id": "191",
    "venue": "velvetlounge",
    "date": "2020-06-19T00:30:00.000Z",
    "title": "Afton Show",
    "title2": "M20, Yaze, Anaya Perry, WoplknSwt, Quanah Kans , Roy Denero, Marcus Alland, The Degenerates , Universe The Kid & Yung Deniro, DsypleAkaMrSype, FAT JU, kwality, Skyy, Keyitnam, JIT, Vokalzs , Kennece the Menace, Articulator",
    "time": "8:30pm",
    "price": 12,
    "link": "http://velvetloungedc.com/"
},
{
    "id": "144",
    "venue": "pearlstreet",
    "date": "2020-06-19T16:00:00.000Z",
    "time": "8 PM",
    "title": "Griefcat",
    "title2": "William Hinson",
    "price": 12,
    "ageRestriction": "Ages 21+",
    "link": "https://www.pearlstreetwarehouse.com/e/griefcat-album-release-show-w-william-hinson-rescheduled-from--90799926023/",
    "tickets": "https://www.eventbrite.com/e/griefcat-album-release-show-w-william-hinson-rescheduled-from-411-tickets-90799926023",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F88633547%2F277252843955%2F1%2Foriginal.20200121-160242?auto=compress&crop=top&fit=crop&h=133&w=200&s=713eceed2e2f5cad18fdd5f110757c4a"
},
{
    "id": "166",
    "venue": "theanthem",
    "date": "2020-06-19T16:00:00.000Z",
    "title": "Louis Tomlinson – POSTPONED, NEW DATE TBA",
    "price": 51,
    "link": "https://theanthemdc.com/event/louis-tomlinson-postponed-new-date-tba",
    "tickets": "https://www.ticketmaster.com/event/15005757B5D64862",
    "img": "background-image: url();"
},
{
    "id": "186",
    "venue": "ustreet",
    "date": "2020-06-19T23:00:00.000Z",
    "time": "7 PM",
    "title": "The Lemon Twigs (POSTPONED)",
    "description": "This event has been postponed. Stay tuned for more info.*",
    "price": 25,
    "status": "Postponed",
    "ageRestriction": "All Ages",
    "link": "https://www.ustreetmusichall.com/e/the-lemon-twigs-postponed--97023938211/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F94520441%2F237869940982%2F1%2Foriginal.20200227-221343?auto=compress&crop=top&fit=crop&h=200&w=300&s=5df0eb1c1897e44bff8bf65343dd1fdd"
},
{
    "id": "15445",
    "venue": "songbyrd",
    "title": "JP SAXE { SOLD OUT }",
    "description": "JP SAXE { SOLD OUT } Songbyrd Presents Downstairs, All Ages",
    "price": 15,
    "time": "8:00 PM",
    "link": "https://www.songbyrddc.com/shows/2020-06-19-jp-saxe",
    "tickets": "https://www.eventbrite.com/e/jp-saxe-hold-it-together-tour-tickets-96038522807",
    "date": "2020-06-20T00:00:00.000Z",
    "img": "https://www.songbyrddc.com/jp-saxe-20200207.jpg?Action=thumbnail&Width=400&algorithm=proportional"
},
{
    "id": "174",
    "venue": "unionstage",
    "date": "2020-06-20T00:00:00.000Z",
    "time": "8 PM",
    "title": "POSTPONED | Yam Haus",
    "status": "Postponed",
    "ageRestriction": "All Ages",
    "link": "https://www.unionstage.com/e/yam-haus-102424125316/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98420656%2F324124700193%2F1%2Foriginal.20200410-150248?auto=compress&fit=clip&h=&w=500&s=2136589d42f2d95508a3b07a70ebd9fc"
},
{
    "id": "15446",
    "venue": "songbyrd",
    "title": "RECORD STORE DAY 2020!",
    "description": "RECORD STORE DAY 2020! Songbyrd and Record Store Day Present Upstairs, All Ages",
    "price": 0,
    "time": "8:00 AM",
    "link": "https://www.songbyrddc.com/shows/2020-06-20-record-store-day-2020",
    "tickets": "https://www.facebook.com/events/1117462071979721",
    "date": "2020-06-20T12:00:00.000Z",
    "img": "https://www.songbyrddc.com/RSD2020June20.jpg?Action=thumbnail&Width=400&algorithm=proportional"
},
{
    "id": "114",
    "venue": "blackcat",
    "date": "2020-06-20T16:00:00.000Z",
    "title": "ARCHERS OF LOAF",
    "title2": "has cancelled. Online purchases refunded automatically. Please return to place of purchase for all other refunds.",
    "img": "http://www.blackcatdc.com/images/460/archers-of-loaf.jpg"
},
{
    "id": "167",
    "venue": "theanthem",
    "date": "2020-06-20T23:00:00.000Z",
    "time": "7:00PM",
    "title": "CNCO – Press Start 2020 Tour",
    "price": 31,
    "status": "CANCELLED",
    "link": "https://theanthemdc.com/event/cnco-press-start-2020-tour",
    "tickets": "https://www.ticketmaster.com/cnco-press-start-2020-tour-washington-district-of-columbia-06-20-2020/event/15005834C64E300E",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/04/fbd5b233-6568-4056-a4ce-535626909148_1268511_TABLET_LANDSCAPE_LARGE_16_9-768x432.jpg"
},
{
    "id": "168",
    "venue": "theanthem",
    "date": "2020-06-21T16:00:00.000Z",
    "title": "DC Jazz Fest",
    "price": 40,
    "status": "CANCELLED",
    "link": "https://theanthemdc.com/event/dc-jazz-fest",
    "tickets": "https://www.ticketmaster.com/dc-jazz-fest-washington-district-of-columbia-06-21-2020/event/15005784C96B6697",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/04/1ee32ea6-8f01-41c1-94dd-4649739934ab_1230921_TABLET_LANDSCAPE_LARGE_16_9-768x432.jpg"
},
{
    "id": "15447",
    "venue": "songbyrd",
    "title": "JP SAXE *SECOND NIGHT ADDED*",
    "description": "JP SAXE *SECOND NIGHT ADDED* Songbyrd Presents Downstairs, All Ages",
    "price": 15,
    "time": "8:00 PM",
    "link": "https://www.songbyrddc.com/shows/2020-06-22-jp-saxe-night-2",
    "tickets": "https://www.eventbrite.com/e/songbyrd-presents-jp-saxe-night-2-tickets-97127395655",
    "date": "2020-06-23T00:00:00.000Z",
    "img": "https://www.songbyrddc.com/jp-saxe-20200207.jpg?Action=thumbnail&Width=400&algorithm=proportional"
},
{
    "id": "1629",
    "venue": "theanthem",
    "date": "2020-06-24T22:30:00.000Z",
    "time": "6:30PM",
    "title": "Signature Theatre Presents Mamma Mia!",
    "price": 44,
    "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia",
    "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-24-2021/event/1500575FB3403C7D",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-2-768x432.jpg"
},
{
    "id": "106",
    "venue": "_930",
    "date": "2020-06-24T23:00:00.000Z",
    "time": "7 PM",
    "title": "RAC",
    "title2": "Hotel Garuda",
    "description": "This event has been postponed. Stay tuned for more details.*",
    "price": 26,
    "status": "Postponed",
    "link": "https://www.930.com/e/rac-postponed--98485604093/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F95613473%2F237869940982%2F1%2Foriginal.20200305-230015?auto=compress&crop=top&fit=crop&h=200&w=300&s=3d064454b1d825f277695d1d6f51034d"
},
{
    "id": "187",
    "venue": "ustreet",
    "date": "2020-06-24T23:00:00.000Z",
    "time": "7 PM",
    "title": "RAC - BOY TOUR 2020 (at 9:30 Club) - (POSTPONED)",
    "title2": "Hotel Garuda",
    "description": "$1 added to each ticket to benefit The Mental Health Fund @Sweet Relief, which provides no-cost therapeutic services to musicians in need.",
    "price": 26,
    "status": "Postponed",
    "ageRestriction": "All Ages",
    "link": "https://www.ustreetmusichall.com/e/rac-boy-tour-at-club-postponed--99423307790/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F96417418%2F335419353173%2F1%2Foriginal.20200311-195634?auto=compress&crop=top&fit=crop&h=200&w=300&s=18e5a640cd3ca07f242d80a397304d71"
},
{
    "id": "145",
    "venue": "pearlstreet",
    "date": "2020-06-25T16:00:00.000Z",
    "time": "8 PM",
    "title": "Rescheduled from 3/27 Passafire \"Keepin' on Tour 2020\" w/ Never Ending Fall",
    "price": 15,
    "ageRestriction": "Ages 21+",
    "link": "https://www.pearlstreetwarehouse.com/e/rescheduled-from-passafire-keepin-on-tour-w-never-ending-fall-79207095555/",
    "tickets": "https://www.eventbrite.com/e/rescheduled-from-327-passafire-keepin-on-tour-2020-w-never-ending-fall-tickets-79207095555",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F78950459%2F277252843955%2F1%2Foriginal.20191031-175955?auto=compress&crop=top&fit=crop&h=133&w=200&s=e2c72bed931e76958098d9d7145b4665"
},
{
    "id": "1630",
    "venue": "theanthem",
    "date": "2020-06-25T22:30:00.000Z",
    "time": "6:30PM",
    "title": "Signature Theatre Presents Mamma Mia!",
    "price": 44,
    "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-2",
    "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-25-2021/event/1500575FBA1C3E79",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-3-768x432.jpg"
},
{
    "id": "1631",
    "venue": "theanthem",
    "date": "2020-06-26T16:30:00.000Z",
    "time": "12:30PM",
    "title": "Signature Theatre Presents Mamma Mia!",
    "price": 44,
    "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-3",
    "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-26-2021/event/1500575FBC293ED3",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-4-768x432.jpg"
},
{
    "id": "1632",
    "venue": "theanthem",
    "date": "2020-06-26T22:30:00.000Z",
    "time": "6:30PM",
    "title": "Signature Theatre Presents Mamma Mia!",
    "price": 49,
    "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-4",
    "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-26-2021/event/1500575FC0884051",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-5-768x432.jpg"
},
{
    "id": "115",
    "venue": "blackcat",
    "date": "2020-06-27T16:00:00.000Z",
    "title": "TV GIRL",
    "title2": "has cancelled. Online purchases refunded automatically. Please return to place of purchase for all other refunds.",
    "img": "http://www.blackcatdc.com/images/460/tv-girl.jpg"
},
{
    "id": "1633",
    "venue": "theanthem",
    "date": "2020-06-27T16:30:00.000Z",
    "time": "12:30PM",
    "title": "Signature Theatre Presents Mamma Mia!",
    "price": 44,
    "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-5",
    "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-27-2021/event/1500575FC39641D5",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-6-768x432.jpg"
},
{
    "id": "1634",
    "venue": "theanthem",
    "date": "2020-06-27T22:00:00.000Z",
    "time": "6:00PM",
    "title": "Signature Theatre Presents Mamma Mia!",
    "price": 44,
    "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-6",
    "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-27-2021/event/1500575FC6644277",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-768x432.jpg"
},
{
    "id": "107",
    "venue": "_930",
    "date": "2020-06-28T00:00:00.000Z",
    "time": "8 PM",
    "title": "Chicano Batman",
    "title2": "Le Butcherettes",
    "description": "This event has been postponed. Stay tuned for more details.*",
    "price": 20,
    "status": "Postponed",
    "link": "https://www.930.com/e/chicano-batman-postponed--96111354649/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F93901521%2F237869940982%2F1%2Foriginal.20200224-182432?auto=compress&crop=top&fit=crop&h=200&w=300&s=34c250eecaa7cab11e4fb65b66fa51d3"
},
{
    "id": "188",
    "venue": "ustreet",
    "date": "2020-06-28T02:30:00.000Z",
    "time": "10:30 PM",
    "title": "Noisia (POSTPONED)",
    "title2": "Droosie, Brothers Brau, Humdinga, Jungle Jessi b2b Selva Masseve, Hosted by Dvine MC",
    "description": "This show is postponed. Stay tuned for more details.",
    "price": 35,
    "status": "Postponed",
    "link": "https://www.ustreetmusichall.com/e/noisia-postponed--92899997393/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F95559521%2F335419353173%2F1%2Foriginal.20200305-181352?auto=compress&crop=top&fit=crop&h=200&w=300&s=a277579655245cda08d5c1752d8ca2e0"
},
{
    "id": "116",
    "venue": "blackcat",
    "date": "2020-06-28T16:00:00.000Z",
    "title": "ANAMANAGUCHI",
    "title2": "has postponed. New date announced soon. Refunds available when new date is announced.",
    "img": "http://www.blackcatdc.com/images/460/anamanaguchi.jpg"
},
{
    "id": "1635",
    "venue": "theanthem",
    "date": "2020-06-29T22:00:00.000Z",
    "time": "6:00PM",
    "title": "Signature Theatre Presents Mamma Mia!",
    "price": 44,
    "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-7",
    "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-29-2021/event/1500575FCB024470",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-1-768x432.jpg"
},
{
    "id": "108",
    "venue": "_930",
    "date": "2020-06-29T23:00:00.000Z",
    "time": "7 PM",
    "title": "The Naked And Famous",
    "title2": "Circa Waves, Luna Shadows",
    "description": "This event has been cancelled. Please check your email for refund information.*",
    "price": 30,
    "status": "Canceled",
    "link": "https://www.930.com/e/the-naked-and-famous-cancelled--98527001915/",
    "img": "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F95736263%2F237869940982%2F1%2Foriginal.20200306-190054?auto=compress&crop=top&fit=crop&h=200&w=300&s=fbe2e51ec0f528cc984bf7e338c0ed6a"
},
{
    "id": "1636",
    "venue": "theanthem",
    "date": "2020-06-30T22:00:00.000Z",
    "time": "6:00PM",
    "title": "Signature Theatre Presents Mamma Mia!",
    "price": 44,
    "link": "https://theanthemdc.com/event/signature-theatre-presents-mamma-mia-8",
    "tickets": "https://www.ticketmaster.com/signature-theatre-presents-mamma-mia-washington-district-of-columbia-06-30-2021/event/1500575FCE91456D",
    "img": "https://theanthemdc.com/wp-content/uploads/2020/05/293e23c3-421a-4af4-87e8-1ebc8caaf4be_1020281_TABLET_LANDSCAPE_LARGE_16_9-7-768x432.jpg"
},
{
    "id": "15448",
    "venue": "songbyrd",
    "title": "JESSIE REYEZ @ FILLMORE SILVER SPRING *POSTPONED*",
    "description": "JESSIE REYEZ @ FILLMORE SILVER SPRING *POSTPONED* LiveNation and Songbyrd Present All Ages",
    "link": "https://www.songbyrddc.com/shows/2020-07-01-jessie-reyez-fillmore",
    "tickets": "https://www.fillmoresilverspring.com/EventDetail?tmeventid=1AvfZp7GkM0PJg5&offerid=120725",
    "date": "2020-07-01T16:00:00.000Z",
    "img": "https://www.songbyrddc.com/jessiereyez.jpg?Action=thumbnail&Width=400&algorithm=proportional"
},
]

export const TraySample = () => (
  <Tray>
    <ScrollWrapper>
      <TrayNavigation>
        <Button
          small
          color={`primary_mid_wod`}
          shadow={`md`}
          style={{
            margin: `0 auto`,
            display: `block`,
          }}
        >
          show filters
        </Button>
      </TrayNavigation>
      <TrayContent>
        <Label bold size={`sm`}>
          Showing 6 events
        </Label>
        <FlexContainer directionColumn>
          {eventSample.map(event => <EventStick {...event} />
)}
        </FlexContainer>
      </TrayContent>
    </ScrollWrapper>
  </Tray>
)
