module.exports = {
    api: {
        url: `http://thehowardtheatre.com/`
    },
    selector: {
        container: `div.post-container`,
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