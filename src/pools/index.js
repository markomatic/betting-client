const { Win } = require('../products/win');
const { WinPool } = require('./win-pool');
const { Place } = require('../products/place');
const { PlacePool } = require('./place-pool');
const { Exacta } = require('../products/exacta');
const { ExactaPool } = require('./exacta-pool');
const {
    win,
    place,
    exacta
} = require('../commissions.config');

const initPols = () => [
    {
        productType: Win,
        pool: new WinPool(win)
    },
    {
        productType: Place,
        pool: new PlacePool(place)
    },
    {
        productType: Exacta,
        pool: new ExactaPool(exacta)
    }
];

let pools = initPols();

let result = null;

const addBet = bet => pools.some((
    {
        productType,
        pool
    }) => {
    const { product } = bet;

    if (product instanceof productType) {
        pool.addProduct(product);
    }

    return false;
});

const setResult = res => result = res;

const resetPools = () => pools = initPols();

const calculateDividends = () => pools
    .map(({pool}) => pool.calculateDividend(result))
    .join('\n');

module.exports = {
    addBet,
    setResult,
    resetPools,
    calculateDividends
};
