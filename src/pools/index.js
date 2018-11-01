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

// Function to init pools by mapping product type and pool instance
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

// Init pools
let pools = initPols();

// Result
let result = null;

/**
 * Function for adding bet into the pool.
 * Iterate through pool map and add product into pool depending of the product type.
 */
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

/**
 * Function for setting the result.
 */
const setResult = res => result = res;

/**
 * Function for reinitializing the pools.
 */
const resetPools = () => pools = initPols();

/**
 * Function for calculating all dividends.
 * Iterate through each pool and map it to the result of calculateDividend.
 * Join each result by '\n'.
 */
const calculateDividends = () => pools
    .map(({pool}) => pool.calculateDividend(result))
    .join('\n');

module.exports = {
    addBet,
    setResult,
    resetPools,
    calculateDividends
};
