class Win {
    /**
     * Represents a Win product.
     * @constructor
     * @param {Array} values - Array of values to initialize a win in format ['<selection>', '<stake>'].
     */
    constructor(values) {
        // Convert selection and stake into numbers and assign to properties
        this.selection = +values.shift();
        this.stake = +values.shift();

        // If any property is invalid value, throw an error
        if (!this.selection || !this.stake) {
            throw new Error('Selection and stake needs to passed for a WIN product.');
        }

        // If any value is non positive number, throw an error
        if (!(this.selection > 0 && this.stake > 0)) {
            throw new Error('Selection and stake must be positive number.');
        }
    }
}

module.exports = {
    Win
};
