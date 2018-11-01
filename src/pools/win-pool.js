const { PoolBase } = require('./pool-base');
const {
    sumBy,
    round,
    reduce,
    isFinite
} = require('lodash');

class WinPool extends PoolBase {
    /**
     * Represents a win pool.
     * @constructor
     * @param {number} commissionPercent - Commission percent taken by the betting company.
     */
    constructor(commissionPercent) {
        super(commissionPercent);
    }

    /**
     * Calculate dividends.
     * @method
     * @param result - End result of the game.
     * @return {string} - Calculated and formatted dividends in format <product>:<winningSelections>:<dividend>
     */
    calculateDividend({ first }) {
        // Calculate sum of all stakes in the pool
        const pool = sumBy(this.products, 'stake');
        // Stakes after commission
        const afterCommission = (1 - this.commission) * pool;
        // Calculate total winning stakes - sum all winning stakes within the pool
        const totalWiningStakes = reduce(
            this.products,
            (result, { selection, stake }) => selection === first ? (result + stake) : result,
            0
        );
        // Calculate dividend
        const dividend = afterCommission / totalWiningStakes;
        // Return formatted result
        return `Win:${first}:$${round(isFinite(dividend) ? dividend : 0, 2)}`;
    }
}

module.exports = {
    WinPool
};
