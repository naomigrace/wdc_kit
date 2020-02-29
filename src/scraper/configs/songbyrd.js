module.exports = {
  api: {
    url: "https://www.songbyrddc.com/music-venue/"
  },
  selector: {
    container: `div.row.event-item`,
    text: {
      time: `time.date-time`,
      title: `a.event-link`,
      description: `div.col-xs-12.col-md-5 p`,
      price: `div.col-xs-6.col-md-3.event-cost`
    },
    attr: {
      link: {
        selector: `a.event-link`,
        attr: `href`
      },
      tickets: {
        selector: `a.eventbtn`,
        attr: `href`
      }
    }
  }
};
