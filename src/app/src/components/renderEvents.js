import renderEvent from "./renderEvent"

const renderEvents = info => {
    console.log(info)
    console.log("HELLO")
    let renderThese = info.events[0]
    if(renderThese.length > 4){
        renderThese = renderThese.slice(0, 5)
    }
  return renderThese ? renderThese.map(event => renderEvent(event)) : null
}

export default renderEvents
