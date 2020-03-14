module.exports = {
  api: {
    url: `https://velvetloungedc.com/`
  },
  selector: {
    container: `div.type-tribe_events`,
    text: {
      date: `div.updated.published.time-details`,
      title: `h2.tribe-events-list-event-title.summary`,
      description: `span.support`,
      time: `p.age-restriction`
    },
    attr: {
      link: {
        selector: `h2.tribe-events-list-event-title.summary a`,
        attr: `href`
      }
    }
  }
};
