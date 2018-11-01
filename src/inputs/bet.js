const { createProduct } = require('../products/create-product');

class Bet {
    /**
     * Represents a Bet input.
     * @constructor
     * @param {Array} values - Array of values to initialize a bet in format ['<product>', '<selection>', '<stake>'].
     */
    constructor(values) {
        // Create product and assign it to the property
        this.product = createProduct(values);
    }
}

module.exports = {
    Bet
};
