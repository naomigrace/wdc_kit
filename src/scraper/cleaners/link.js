module.exports = (event) => {
    const mainLinks = {
        'songbyrd': 'https://www.songbyrddc.com',
        'theanthem': 'https://www.theanthemdc.com/'
    }

    if(Object.keys(mainLinks).indexOf(event.venue) > -1){
        event.link = mainLinks[event.venue] + event.link
    }

    if(event.link === undefined){
        delete event.link
    }

}