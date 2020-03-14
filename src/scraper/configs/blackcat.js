module.exports = {
  api: {
    url: `http://www.blackcatdc.com/schedule.html`
  },
  selector: {
    container: `div.show`,
    text: {
      date: `h2.date`,
      title: `h1.headline`,
      time: `p.show-text`
    },
    attr: {
      link: {
        selector: `h1.headline a`,
        attr: `href`
      },
      tickets: {
        selector: `div.show-details>a`,
        attr: `href`
      }
    }
  }
};
