const { Bet } = require('./bet');
const { Result } = require('./result');

const TYPE_BET = 'Bet';
const TYPE_RESULT = 'Result';

// Map string into class
const inputsMap = {
    [TYPE_BET]: Bet,
    [TYPE_RESULT]: Result
};

const processInput = value => {
    // Split input into array by ':', eg. 'Bet:W:1:3' => ['Bet', 'W', '1', '3']
    const parts = value.split(':');

    // Get class from map by the first value from the array
    const Type = inputsMap[parts.shift()];

    // If no type is found, throw an error
    if (!Type) {
        throw new Error('Value provided is not bet or result!');
    }

    // Return new instance of the mapped class
    return new Type(parts);
};

module.exports = {
    processInput
};
