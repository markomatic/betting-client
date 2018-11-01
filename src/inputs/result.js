class Result {
    /**
     * Represents a Result input.
     * @constructor
     * @param {Array} values - Array of values to initialize a result in format ['<first>', '<second>', '<third>'].
     */
    constructor(values) {
        // Convert each placed horse to number and assign to properties
        this.first = +values.shift();
        this.second = +values.shift();
        this.third = +values.shift();

        // If any place contains non positive horse, throw an error
        if (!(this.first > 0 && this.second > 0 && this.third > 0)) {
            throw new Error('Horse number must be greater than 0.');
        }

        // If any more places contains same horse, throw an error
        if (this.first === this.second || this.second === this.third) {
            throw new Error('Same horse can not be on two places.');
        }
    }
}

module.exports = {
    Result
};
