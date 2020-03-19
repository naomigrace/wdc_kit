import renderEvent from "./mapRenderEvent"

const renderEvents = info => {
    let renderThese = info.events[0]
    if(renderThese.length > 4){
        renderThese = renderThese.slice(0, 5)
    }
  return renderThese ? renderThese.map(event => renderEvent(event)) : null
}

export default renderEvents
