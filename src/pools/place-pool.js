const { PoolBase } = require('./pool-base');
const {
    sumBy,
    round,
    reduce,
    isFinite
} = require('lodash');

class PlacePool extends PoolBase {
    constructor(commission) {
        super(commission);
    }

    calculateDividend({ first, second, third }) {
        const pool = sumBy(this.products, 'stake');
        const afterCommission = (1 - this.commission) * pool;
        const {
            firstWinningStakes,
            secondWinningStakes,
            thirdWinningStakes
        } = reduce(this.products, (result, { selection, stake }) => {
            const mapStakes = {
                [first]: () => result.firstWinningStakes += stake,
                [second]: () => result.secondWinningStakes += stake,
                [third]: () => result.thirdWinningStakes += stake
            };
            mapStakes[selection] && mapStakes[selection]();

            return result;
        }, {
            firstWinningStakes: 0,
            secondWinningStakes: 0,
            thirdWinningStakes: 0
        });

        const thirdOfAfterCommission = afterCommission / 3;
        return [
            {
                dividend: thirdOfAfterCommission / firstWinningStakes,
                place: first
            },
            {
                dividend: thirdOfAfterCommission / secondWinningStakes,
                place: second
            },
            {
                dividend: thirdOfAfterCommission / thirdWinningStakes,
                place: third
            }
        ].map(({ place, dividend }) => `Place:${place}:$${round(isFinite(dividend) ? dividend : 0, 2)}`).join('\n');
    }
}

module.exports = {
    PlacePool
};
