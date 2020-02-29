module.exports = {
  api: {
    url: "https://www.pearlstreetwarehouse.com/"
  },
  selector: {
    container: `article.list-view-item`,
    text: {
      time: `time.date-time`,
      title: `h1.event-name.headliners`,
      description: `h2.supports`,
      price: `span.price-range`
    },
    attr: {
      link: {
        selector: `a.image-url`,
        attr: `href`
      },
      tickets: {
        selector: `button.ticket-link.primary-link`,
        attr: `href`
      }
    }
  }
};
