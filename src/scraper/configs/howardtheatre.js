module.exports = {
    api: {
        url: `http://thehowardtheatre.com/`
    },
    selector: {
        container: `div.home-primary-column.col1 div.home-primary-column-inner article#text-3.widget.widget_text div.container div.textwidget div.post-container`,
        text: {
            date: `p.post-excerpt`,
            title: `p.post-title`,
        },
        attr: {
            link: {
              selector: `p.post-title a`,
              attr: `href`
            },
            tickets: {
                selector: `p.post-more a`,
                attr: `href`
            }
          }
    }
}