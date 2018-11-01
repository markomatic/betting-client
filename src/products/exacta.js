class Exacta {
    /**
     * Represents an Exacta product.
     * @constructor
     * @param {Array} values - Array of values to initialize an exacta in format ['<first_selection>,<second_selection>', '<stake>'].
     */
    constructor(values) {
        const selection = values.shift();
        // If no selection is provided throw an error
        if (!selection) {
            throw new Error('Two selections needs to passed for a EXACTA product.');
        }

        // Split selections by ','
        const selections = selection.split(',');

        // Convert selections and stake into numbers and assign to properties
        this.firstSelection = +selections.shift();
        this.secondSelection = +selections.shift();
        this.stake = +values.shift();

        // If any property is invalid value, throw an error
        if (!this.firstSelection || !this.secondSelection || !this.stake) {
            throw new Error('Two selections and a stake needs to passed for a EXACTA product.');
        }

        // If any value is non positive number, throw an error
        if (!(this.firstSelection > 0 && this.secondSelection > 0 && this.stake > 0)) {
            throw new Error('Selections and a stake must be positive number.');
        }
    }
}

module.exports = {
    Exacta
};
