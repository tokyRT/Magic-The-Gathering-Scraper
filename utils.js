const cheerio = require('cheerio');

const extractImages = (htmlResponse, selector) => {
    const $ = cheerio.load(htmlResponse);
    const images = [];
    $(selector).each((index, element) => {
        const src = $(element).attr('src');
        if (src) {
            images.push(src);
        }
    });

    return images;
}

exports.extractImages = extractImages;