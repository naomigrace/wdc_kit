module.exports = {
    api: {
      url: "https://www.unionstage.com/"
    },
    selector: {
      container: `article.list-view-item`,
      text: {
        date: `span.dates`,
        time: `time.date-time section.times span.start`,
        title: `h1.event-name.headliners`,
        description: `h2.supports`,
        price: `span.price-range`
      },
      attr: {
        link: {
          selector: `h1.event-name.headliners a`,
          attr: `href`
        },
        tickets: {
          selector: `button.ticket-link.primary-link`,
          attr: `href`
        }
      }
    }
  };
  