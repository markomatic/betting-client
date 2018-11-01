const { createProduct } = require('../products/create-product');

class Bet {
    constructor(values) {
        this.product = createProduct(values);
    }
}

module.exports = {
    Bet
};
