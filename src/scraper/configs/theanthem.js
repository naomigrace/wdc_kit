module.exports = {
  api: {
    url: "https://www.theanthemdc.com/"
  },
  selector: {
    container: `div.list-view-item`,
    text: {
      date: `h2.dates`,
      time: `h2.times span.doors`,
      title: `h1.headliners.summary`,
      description: `h2.supports.description`,
      price: `h3.price-range`
    },
    attr: {
      link: {
        selector: `h1.headliners.summary a`,
        attr: `href`
      },
      tickets: {
        selector: `h3.ticket-link.primary-link a.tickets`,
        attr: `href`
      }
    }
  }
};
