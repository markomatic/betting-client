const readline = require('readline');
const { Bet } = require('./inputs/bet');
const {
    addBet,
    setResult,
    calculateDividends
} = require('./pools');
const { processInput } = require('./inputs/process-input');

const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

lineReader.on('line', line => {
    const input = processInput(line);

    // If input is bet, add bet to pool
    if (input instanceof Bet) {
        addBet(input);
        return;
    }

    // If input is result, set result and finish input
    setResult(input);
    lineReader.close();
});

lineReader.on('close', () => {
    // Run calculations
    const result = calculateDividends();

    // Print output
    console.log('\n------ OUTPUT');
    console.log(result);
});

lineReader.prompt();
