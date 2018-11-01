class PoolBase {
    /**
     * Represents a pool base.
     * @constructor
     * @param {number} commissionPercent - Commission percent taken by the betting company.
     */
    constructor(commissionPercent) {
        this.commission = commissionPercent / 100;
        this.products = [];
    }

    /**
     * Adds product into pool.
     * @method
     * @param product - Product to add into pool.
     */
    addProduct(product) {
        this.products.push(product);
    }

    /**
     * Calculate dividends.
     * @method
     * @param result - End result of the game.
     * @return {string} - Calculated and formatted dividends in format <product>:<winningSelections>:<dividend>
     */
    calculateDividend(result) {
        throw new Error('calculateDividends method must be implemented.');
    }
}

module.exports = {
    PoolBase
};
