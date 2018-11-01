const { Exacta } = require('./exacta');
const { Place } = require('./place');
const { Win } = require('./win');

const TYPE_WIN = 'W';
const TYPE_PLACE = 'P';
const TYPE_EXACTA = 'E';

// Map string to product class
const productsMap = {
    [TYPE_WIN]: Win,
    [TYPE_PLACE]: Place,
    [TYPE_EXACTA]: Exacta
};

const createProduct = values => {
    // Get product class from map
    const Product = productsMap[values.shift()];

    // If no class is found, throw an error
    if (!Product) {
        throw new Error('Can not find product.');
    }

    // Return new product instance
    return new Product(values);
};

module.exports = {
    createProduct
};
