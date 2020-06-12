import React from "react"
import EventPage from "../templates/EventPage"

export default {
    title: "Event Page Template",
}

const data = 
{
    "source": "wdc_scraper",
    "venue": "politicsprose",
    "date": "2020-06-12T16:00:00.000Z",
    "title": "P&P Live!: Angela J. Davis - Policing the Black Man - with Roger A. Fairfax and Kristin Henning",
    "description": "This event will be streamed online as part of our P&P Live! Series. Professor Angela J. Davis, Editor of Policing the Black Man: Arrest, Prosecution and Imprisonment, will be joined by two of the contributing authors of the book -- Professors Kristin Henning and Roger A. Fairfax, Jr.-- to discuss the recent killings of George Floyd, Ahmaud Arbery, and other unarmed black men and women. Davis is a Professor of Law at American University and the author ofArbitrary Justice: the Power of the American Prosecutor and other publications on racism in the criminal justice system. She is a former Director of the Public Defender Service for the District of Columbia. Fairfax is the Patricia Roberts Harris Research Professor of Law and the Founding Director of the Criminal Law & Policy Initiative at George Washington University. A former federal prosecutor and criminal defense attorney, he has conducted research on mechanisms of accountability for unjustified police violence against African Americans. Henning is the Agnes N. Williams Professor of Law and Director of the Juvenile Justice Clinic & Initiative at Georgetown Law. She is a former public defender who writes extensively about race, adolescence and policing and is the author of the forthcoming book Arrested Development: From Emmett Till to Tamir Rice. Instead of a set ticket price, we ask that you contribute what you can to support Politics and Prose Bookstore and our virtual event series. We know that everyone has been affected in these trying times, and we will continue to make our programming accessible to all. That said, a suggested contribution of $5, $10, whatever you can afford, will go a long way to keep our programming—and our bookstore—afloat as we are forced to adapt to new ways of business. The other way you can support us is always by purchasing a copy of the book from our website. We are so grateful to be surrounded by such a loyal and engaged community and we thank you for your support, now and always. Click here to join the Live! Event. ",
    "link": "https://www.politics-prose.com/book/9780525436614",
    "tickets": "https://www.eventbrite.com/e/pp-live-angela-j-davis-with-roger-fairfax-and-kris-henning-tickets-108151321514",
    "img": "https://images.booksense.com/images/books/614/436/FC9780525436614.JPG",
    "status": [
        "Virtual", "Status Here"
    ],
    "slug": "ppliveangelajdavispolicingtheblackmanwithrogerafairfaxandkristinhenning-politicsprose-06121200",
    "id": "vwH0BXggP-p"
}

export const EventPageTemplateExample = () => 
    <EventPage {...data}/>
