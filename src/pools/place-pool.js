const { PoolBase } = require('./pool-base');
const {
    sumBy,
    round,
    reduce,
    isFinite
} = require('lodash');

class PlacePool extends PoolBase {
    /**
     * Represents a place pool.
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
     * @return {string} - Calculated and formatted dividends in format <product>:<winningSelection>:<dividend>.
     */
    calculateDividend({ first, second, third }) {
        // Calculate sum of all stakes in the pool
        const pool = sumBy(this.products, 'stake');
        // Stakes after commission
        const afterCommission = (1 - this.commission) * pool;
        // Calculate total winning stakes for each place (1., 2., 3.) - sum all winning stakes for each place within the pool
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

        // Take 1/3 of the pool after commission
        // Calculate dividend for each place
        // Map each dividend into correct format <product>:<winningSelection>:<dividend>.
        // Return formatted sting with all places joined by '\n'
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
