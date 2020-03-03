module.exports = {
  api: {
    url: "https://www.songbyrddc.com/music-venue/"
  },
  selector: {
    container: `div.row.event-item`,
    text: {
      title: `a.event-link`,
      description: `div.col-xs-12.col-md-5 p`,
      price: `div.col-xs-6.col-md-3.event-cost`,
      time: `div.col-xs-6.col-md-2 p`
    },
    attr: {
      link: {
        selector: `a.event-link`,
        attr: `href`
      },
      tickets: {
        selector: `a.eventbtn`,
        attr: `href`
      },
      date: {
        selector: `div.col-xs-6.col-md-2 p strong span.eventDate`,
        attr: `v`
      }
    }
  }
};
