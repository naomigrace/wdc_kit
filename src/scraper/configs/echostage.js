module.exports = {
    api: {
        url: `http://www.echostage.com/`
    },
    selector: {
        container: `article.list-view-item`,
        text: {
          date: `time.date-time span.dates`,
          time: `section.times`,
          title: `h1.event-name.headliners`,
          description: `section.topline-info.presented-by`,
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
}