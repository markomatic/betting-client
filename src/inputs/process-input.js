const { Bet } = require('./bet');
const { Result } = require('./result');

const TYPE_BET = 'Bet';
const TYPE_RESULT = 'Result';

const inputsMap = {
    [TYPE_BET]: Bet,
    [TYPE_RESULT]: Result
};

const processInput = value => {
    const parts = value.split(':');

    const Type = inputsMap[parts.shift()];

    if (!Type) {
        throw new Error('Value provided is not bet or result!');
    }

    return new Type(parts);
};

module.exports = {
    processInput
};
