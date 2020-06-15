const eventSample = [
  {
    id: "390",
    category: "music",
    venue: "theanthem",
date: new Date(),
    time: "5:30PM",
    title: "Local Natives & Foals",
    title2: "Cherry Glazerr",
    price: 45,
    status: ["CANCELLED"],
    link: "https://theanthemdc.com/event/local-natives-foals",
    tickets:
      "https://www.ticketmaster.com/local-natives-foals-washington-district-of-columbia-06-03-2020/event/15005768D4FFB00E",
    img:
      "https://theanthemdc.com/wp-content/uploads/2020/04/b3692ecf-9a3b-480c-8147-a57eef5b7625_969011_TABLET_LANDSCAPE_LARGE_16_9-768x432.jpg",
  },
  {
    id: "3121",
    venue: "ustreet",
        category: "music",
date: "2020-06-04T23:00:00.000Z",
    time: "7 PM",
    title: "Tall Heights",
    title2: "Victoria Canal",
    description:
      "This event has been cancelled. Check your email for refund information.*",
    price: 15,
    status: ["Canceled"],
    ageRestriction: "All Ages",
    link:
      "https://www.ustreetmusichall.com/e/tall-heights-cancelled--83410518105/",
    img:
      "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F82372243%2F350041607443%2F1%2Foriginal.20191123-004002?auto=compress&crop=top&fit=crop&h=200&w=300&s=149f98464354d3e9177bb7b3f8839da9",
  },
  {
    id: "3100",
    venue: "thehamilton",
        category: "music",
date: "2020-06-07T23:30:00.000Z",
    time: "7:30 PM",
    title: "Bettye Lavette",
    title2: "Opening Act TBA",
    price: 30,
    status: ["Postponed"],
    ageRestriction: "All Ages",
    link: "https://live.thehamiltondc.com/e/bettye-lavette-98536624697/",
    img:
      "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F95633431%2F292744749467%2F1%2Foriginal.20200306-015217?auto=compress&crop=top&fit=crop&h=133&w=200&s=ed22107128e7ffbd865e85402dcb4f41",
  },
  {
    id: "370",
    venue: "pieshop",
        category: "music",
date: "2020-06-04T00:00:00.000Z",
    time: "8pm",
    title: "(FREE) Upper Crust Comedy",
    link: "https://pieshopdc.com/events/free-upper-crust-comedy-12/",
    tickets:
      "https://www.etix.com/ticket/p/2052351/freeupper-crust-comedy-washington-pie-shop?partner_id=240",
    status: [],
  },
  {
    id: "330",
    venue: "dc9",
        category: "music",
date: "2020-06-04T00:00:00.000Z",
    time: "8 PM",
    title: "Phoebe Ryan",
    title2: "EZI",
    price: 17,
    status: ["Canceled"],
    ageRestriction: "All Ages",
    link: "https://www.dc9.club/e/phoebe-ryan-99100938575/",
    img:
      "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F96068341%2F353790736919%2F1%2Foriginal.20200309-214425?auto=compress&fit=clip&h=&w=500&s=08c79ed5c1a0f267487989cb1d34a45d",
  },
  {
    id: "3717",
    venue: "pieshop",
        category: "music",
date: "2020-06-04T16:00:00.000Z",
    time: "8pm",
    title: "Brett Cameron / Big Like Bear / Jahnel Daliya",
    price: 8,
    link:
      "https://pieshopdc.com/events/brett-cameron-big-like-bear-jahnel-daliya/",
    tickets:
      "https://www.etix.com/ticket/p/3116371/brett-cameron-big-like-bear-jahnel-daliya-washington-pie-shop?partner_id=240",
    status: [],
  },
  {
    id: "374",
    venue: "pieshop",
        category: "music",
date: "2020-06-04T16:00:00.000Z",
    time: "8pm",
    title: "Ezra Bell “This Way To Oblivion” Album Release Tour w/ Evolfo",
    price: 12,
    link:
      "https://pieshopdc.com/events/ezra-bell-this-way-to-oblivion-album-release-tour-w-evolfo/",
    tickets:
      "https://www.etix.com/ticket/p/7596712/ezra-bell-this-way-to-oblivionalbum-release-tour-wevolfo-washington-pie-shop?partner_id=240",
    status: [],
  },
  {
    id: "3725",
    venue: "pieshop",
        category: "music",
date: "2020-06-04T16:00:00.000Z",
    time: "8pm",
    title: "The Lagoons",
    price: 12,
    link: "https://pieshopdc.com/events/the-lagoons/",
    tickets:
      "https://www.etix.com/ticket/p/6771322/the-lagoons-washington-pie-shop?partner_id=240",
    status: [],
  },
  {
    id: "3712",
    venue: "pieshop",
        category: "music",
date: "2020-06-04T16:00:00.000Z",
    time: "8pm",
    title: "Tim Kardashian, Superstar: A 40th birthday charity roast",
    link:
      "https://pieshopdc.com/events/tim-kardashian-superstar-a-40th-birthday-charity-roast/",
    tickets:
      "https://www.etix.com/ticket/p/8680144/tim-kardashiansuperstara-40th-birthday-charity-roast-washington-pie-shop?partner_id=240",
    status: [],
  },
  {
    id: "38437",
    venue: "songbyrd",
    title: "THE COATHANGERS",
    description: "Downstairs",
    price: 18,
    time: "8:00 PM",
    link: "https://www.songbyrddc.com/shows/2020-06-04-the-coathangers",
    tickets: "https://www.eventbrite.com/e/the-coathangers-tickets-96162967023",
        category: "music",
date: "2020-06-05T00:00:00.000Z",
    img:
      "https://www.songbyrddc.com/thecoathangers.jpg?Action=thumbnail&Width=400&algorithm=proportional",
    ageRestriction: "All Ages",
    status: ["Postponed"],
  },
  {
    id: "3110",
    venue: "unionstage",
        category: "music",
date: "2020-06-05T01:30:00.000Z",
    time: "9:30 PM",
    title: "Star Kitchen",
    status: ["Canceled"],
    ageRestriction: "All Ages",
    link: "https://www.unionstage.com/e/star-kitchen-102190576766/",
    img:
      "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98201394%2F324124700193%2F1%2Foriginal.20200407-172629?auto=compress&fit=clip&h=&w=500&s=7e44eba9f6b2b77d36c3fa3897c0293d",
  },
  {
    id: "38438",
    venue: "songbyrd",
    title: "FREE FLOW FRIDAYS",
    description:
      "FREE FLOW FRIDAYS SONGBYRD AND @MARY2THEGAME PRESENT VIA INSTAGRAM LIVE",
    price: 0,
    time: "12:00 PM",
    link: "https://www.songbyrddc.com/shows/2020-06-05-FreeFlowFridays",
    tickets: "https://www.facebook.com/events/2044090372401479/",
        category: "music",
date: "2020-06-05T16:00:00.000Z",
    img:
      "https://www.songbyrddc.com/FreeFlow.png?Action=thumbnail&Width=400&algorithm=proportional",
    status: ["Virtual"],
  },
  {
    id: "391",
    venue: "theanthem",
        category: "music",
date: "2020-06-05T22:30:00.000Z",
    time: "6:30PM",
    title: "Kaytranada",
    link: "https://theanthemdc.com/event/kaytranada-postponed-new-date-tba",
    tickets: "https://www.ticketmaster.com/event/1500583FE8AE713A",
    img: "background-image: url();",
    status: ["Postponed"],
  },
  {
    id: "3122",
    venue: "ustreet",
        category: "music",
date: "2020-06-05T22:30:00.000Z",
    time: "6:30 PM",
    title: "KAYTRANADA",
    title2: "Stwo",
    description: "This event is at The Anthem.",
    price: 35,
    status: ["Postponed"],
    ageRestriction: "All Ages",
    link:
      "https://www.ustreetmusichall.com/e/kaytranada-bubba-north-american-tour-postponed--92764221283/",
    img:
      "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F90675191%2F335419353173%2F1%2Foriginal.20200203-181044?auto=compress&crop=top&fit=crop&h=200&w=300&s=788de190c72fd1b29bd47ac209136456",
  },
  {
    id: "3123",
    venue: "ustreet",
        category: "music",
date: "2020-06-05T23:00:00.000Z",
    time: "7 PM",
    title: "City of the Sun",
    description:
      "This event has been cancelled. Check your email for refund information.*",
    price: 15,
    status: ["Canceled"],
    ageRestriction: "All Ages",
    link:
      "https://www.ustreetmusichall.com/e/city-of-the-sun-cancelled--77221588851/",
    img:
      "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F77113595%2F350041607443%2F1%2Foriginal.20191016-213750?auto=compress&crop=top&fit=crop&h=200&w=300&s=4255b62b5b05c4490c49d4bcbab43344",
  },
  {
    id: "371",
    venue: "pieshop",
        category: "music",
date: "2020-06-06T00:00:00.000Z",
    time: "8pm",
    title: "Laser Background / BRNDA / Kid Claws",
    price: 10,
    link: "https://pieshopdc.com/events/laser-background-brnda-kid-claws/",
    tickets:
      "https://www.etix.com/ticket/p/8461648/laser-background-brnda-kid-claws-washington-pie-shop?partner_id=240",
    status: [],
  },
  {
    id: "3101",
    venue: "thehamilton",
        category: "music",
date: "2020-06-06T00:00:00.000Z",
    time: "8 PM",
    title: "Start Making Sense",
    title2: "Nik Greeley & The Operators",
    price: 18,
    status: ["Postponed"],
    ageRestriction: "Ages 18+",
    link: "https://live.thehamiltondc.com/e/start-making-sense-87513424007/",
    img:
      "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F85644173%2F292744749467%2F1%2Foriginal.20190629-215145?auto=compress&crop=top&fit=crop&h=133&w=200&s=e8206bca3e232e3d5df64ce804c6757a",
  },
  {
    id: "3111",
    venue: "unionstage",
        category: "music",
date: "2020-06-06T01:00:00.000Z",
    time: "9 PM",
    title: "White Ford Bronco: DC's All 90s Band",
    status: ["Postponed"],
    ageRestriction: "All Ages",
    link:
      "https://www.unionstage.com/e/white-ford-bronco-dc-s-all-s-band-102266558028/",
    img:
      "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98273690%2F324124700193%2F1%2Foriginal.20200408-150904?auto=compress&fit=clip&h=&w=500&s=27b94a8733ba617f191843346b6cabad",
  },
  {
    id: "3103",
    venue: "thehamilton",
        category: "music",
date: "2020-06-06T16:00:00.000Z",
    title: "Carsie Blanton (Livestream)",
    price: 10,
    ageRestriction: "All Ages",
    link: "https://live.thehamiltondc.com/e/carsie-blanton-106675156264/",
    tickets: "https://www.eventbrite.com/e/carsie-blanton-tickets-106675156264",
    img:
      "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101812012%2F292744749467%2F1%2Foriginal.20200525-202741?auto=compress&crop=top&fit=crop&h=133&w=200&s=f048289cf54429b4aa4832e29144e3e9",
    status: [],
  },
  {
    id: "312",
    venue: "blackcat",
        category: "music",
date: "2020-06-06T16:00:00.000Z",
    title: "NILÜFER YANYA",
    title2:
      "has postponed. New date announced soon. Refunds available when new date is announced.",
    img: "http://www.blackcatdc.com/images/460/nilufer-yanya-thumb.jpg",
    status: ["Postponed"],
  },
  {
    id: "38439",
    venue: "songbyrd",
    title: "SNOTTY NOSE REZ KIDS",
    description:
      "SNOTTY NOSE REZ KIDS *POSTPONED* Songbyrd and LiveNation Present Downstairs, All Ages",
    link: "https://www.songbyrddc.com/shows/2020-06-06-snotty-nose-rez-kids",
    tickets:
      "https://www.eventbrite.com/e/songbyrd-presents-snotty-nose-rez-kids-tickets-92953256693",
        category: "music",
date: "2020-06-06T16:00:00.000Z",
    img:
      "https://www.songbyrddc.com/snrk.jpg?Action=thumbnail&Width=400&algorithm=proportional",
    status: ["Postponed"],
  },
  {
    id: "3102",
    venue: "thehamilton",
        category: "music",
date: "2020-06-07T00:00:00.000Z",
    time: "8 PM",
    title: "An Evening With: Get The Led Out (Rescheduled - 4/29/21)",
    price: 25,
    status: ["Rescheduled - 4/29/21"],
    ageRestriction: "All Ages",
    link:
      "https://live.thehamiltondc.com/e/an-evening-with-get-the-led-out-rescheduled--106157772756/",
    img:
      "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F101476032%2F292744749467%2F1%2Foriginal.20200106-202151?auto=compress&crop=top&fit=crop&h=133&w=200&s=0aa336e3984d98382d597b841ee205b8",
  },
  {
    id: "372",
    venue: "pieshop",
        category: "music",
date: "2020-06-07T00:00:00.000Z",
    time: "8pm",
    title: "Hillbilly Casino",
    price: 12,
    link: "https://pieshopdc.com/events/hillbilly-casino/",
    tickets:
      "https://www.etix.com/ticket/p/7053575/hillbilly-casino-washington-pie-shop?partner_id=240",
  },
  {
    id: "300",
    venue: "_930",
        category: "music",
date: "2020-06-07T00:00:00.000Z",
    time: "8 PM",
    title: "Stormzy",
    description: "This event has been postponed. Stay tuned for more details.*",
    price: 30,
    status: ["Postponed"],
    link: "https://www.930.com/e/stormzy-postponed--83657569041/",
    img:
      "https://img-dev.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F82697391%2F237869940982%2F1%2Foriginal.20191126-171410?auto=compress&crop=top&fit=crop&h=200&w=300&s=165a9285f2e5cbc0f42c44b7bdaa14fc",
  },
  {
    id: "313",
    venue: "blackcat",
        category: "music",
date: "2020-06-07T16:00:00.000Z",
    title: "PROTOMARTYR",
    title2:
      "has cancelled. Online purchases refunded automatically. Please return to place of purchase for all other refunds.",
    img: "http://www.blackcatdc.com/images/460/protomartyr.jpg",
    status: ["Cancelled"],
  },
]

export default eventSample
