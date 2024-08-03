const axios = require('axios');
const cheerio = require('cheerio');
const { extractImages } = require('./utils')

const search = async (req, res) => {
    const query = req.params.query;
    try {
        const response = await axios.get(`https://scryfall.com/search?q=${query}`);
        const htmlResponse = response.data;
        const images = extractImages(htmlResponse, '.card-grid-item-card-front img')
        res.send(images);
    } catch (error) {
        res.status(500).send(error.toString());
    }
}

exports.search = search;