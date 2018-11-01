class PoolBase {
    constructor(commissionPercent) {
        this.commission = commissionPercent / 100;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    calculateDividend(result) {
        throw new Error('calculateDividends method must be implemented.');
    }
}

module.exports = {
    PoolBase
};
