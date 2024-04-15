const figlet = require('figlet');
const cowsay = require('cowsay');
const art = require('tea-word-art');

const teaDescriptions = {
    "green": "Green tea, without fermentation, retains the original green color of the tea leaves.",
    "black": "Black tea, fully fermented tea, with a rosy tea soup.",
    "oolong": "Oolong tea, semi fermented tea, falls between green tea and black tea.",
    "white": "White tea, slightly fermented, retains the natural flavor of the tea leaves.",
    "puer": "Pu'er tea, after special fermentation treatment, has a unique aged aroma."
};

function getTeaDescription(type) {
    return teaDescriptions[type.toLowerCase()] || "Unknown type of tea.";
}

module.exports = {
    getTeaDescription
}