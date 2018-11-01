const { Exacta } = require('./exacta');
const { Place } = require('./place');
const { Win } = require('./win');

const TYPE_WIN = 'W';
const TYPE_PLACE = 'P';
const TYPE_EXACTA = 'E';

const productsMap = {
    [TYPE_WIN]: Win,
    [TYPE_PLACE]: Place,
    [TYPE_EXACTA]: Exacta
};

const createProduct = values => {
    const Product = productsMap[values.shift()];

    if (!Product) {
        throw new Error('Can not find product.');
    }

    return new Product(values);
};

module.exports = {
    createProduct
};
