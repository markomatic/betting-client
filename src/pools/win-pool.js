const { PoolBase } = require('./pool-base');
const {
    sumBy,
    round,
    reduce,
    isFinite
} = require('lodash');

class WinPool extends PoolBase {
    constructor(commissionPercent) {
        super(commissionPercent);
    }

    calculateDividend({ first }) {
        const pool = sumBy(this.products, 'stake');
        const afterCommission = (1 - this.commission) * pool;
        const totalWiningStakes = reduce(
            this.products,
            (result, { selection, stake }) => selection === first ? (result + stake) : result,
            0
        );
        const dividend = afterCommission / totalWiningStakes;
        return `Win:${first}:$${round(isFinite(dividend) ? dividend : 0, 2)}`;
    }
}

module.exports = {
    WinPool
};
