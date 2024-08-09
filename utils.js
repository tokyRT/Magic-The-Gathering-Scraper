const cheerio = require('cheerio');

const extractImages = (html) => {
    const $ = cheerio.load(html);
    const images = [];
    const selector = '.card-grid-item';
    $(selector).each((index, element) => {
        const name = $(element).find('.card-grid-item-invisible-label').text();
        const frontImg = $(element).find('.card-grid-item-card-front img').attr('src');
        const backImg = $(element).find('.card-grid-item-card-back img').attr('src');
        const id = $(element).attr('data-card-id');
        const image = {
            id,
            name,
            front: frontImg ? frontImg : null,
            back: backImg ? backImg : null
        }
        images.push(image);
    });
    return images;
}

exports.extractImages = extractImages;