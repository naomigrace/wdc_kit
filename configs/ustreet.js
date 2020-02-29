module.exports = {
    api: {
        url: `https://www.ustreetmusichall.com/`
    },
    selector: {
        container: `article.list-view-item `,
        text: {
            dates: `span.dates`,
          time: `section.times`,
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
            selector: `article.external.ticket-link.primary-link a`,
            attr: `href`
          }
        }
      }
}