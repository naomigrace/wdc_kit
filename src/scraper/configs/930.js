module.exports = {
  api: {
    url: "https://www.930.com/"
  },
  selector: {
    container: `article.list-view-item`,
    text: {
      date: `time.date-time span.dates`,
      time: `span.doors`,
      title: `h1.event-name.headliners`,
      description: `h2.supports`
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
