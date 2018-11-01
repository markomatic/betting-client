const { PoolBase } = require('./pool-base');
const {
    sumBy,
    round,
    reduce,
    isFinite
} = require('lodash');

class ExactaPool extends PoolBase {
    constructor(commission) {
        super(commission);
    }

    calculateDividend({ first, second }) {
        const pool = sumBy(this.products, 'stake');
        const afterCommission = (1 - this.commission) * pool;
        const totalWiningStakes = reduce(
            this.products,
            (
                result,
                {
                    firstSelection,
                    secondSelection,
                    stake
                }) => firstSelection === first && secondSelection === second ? (result + stake) : result,
            0
        );
        const dividend = afterCommission / totalWiningStakes;
        return `Exacta:${first},${second}:$${round(isFinite(dividend) ? dividend : 0, 2)}`;
    }
}

module.exports = {
    ExactaPool
};
