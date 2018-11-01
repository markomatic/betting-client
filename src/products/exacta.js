class Exacta {
    constructor(values) {
        const selection = values.shift();
        if (!selection) {
            throw new Error('Two selections needs to passed for a EXACTA product.');
        }

        const selections = selection.split(',');

        this.firstSelection = +selections.shift();
        this.secondSelection = +selections.shift();
        this.stake = +values.shift();

        if (!this.firstSelection || !this.secondSelection || !this.stake) {
            throw new Error('Two selections and a stake needs to passed for a EXACTA product.');
        }

        if (!(this.firstSelection > 0 && this.secondSelection > 0 && this.stake > 0)) {
            throw new Error('Selections and a stake must be positive number.');
        }
    }
}

module.exports = {
    Exacta
};
