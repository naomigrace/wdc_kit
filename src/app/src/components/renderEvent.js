import React from "react"

const renderEvent = (event) => {
    return(
        <div>
            {event.title}
            {JSON.stringify(event.date)}
            {event.time && event.time}
            {event.price && event.price}
            {/* {event.link} */}
        </div>
    )
}

export default renderEvent