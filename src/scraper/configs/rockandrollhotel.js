module.exports = {
    api: {
        url: `http://www.rockandrollhoteldc.com/`
    },
    selector: {
        container: `div.entry-content-live`,
        text: {
            date: `div.artist_date`,
            title: `div.artist_title`,
            description: `div.openers`,
            price: `div.artist_date_bottom`
        },
        attr: {
            link: {
              selector: `div.artist_title a`,
              attr: `href`
            },
            tickets: {
                selector: `div.ticket_btn_hot_small a`,
                attr: `href`
            }
          }
    }
}