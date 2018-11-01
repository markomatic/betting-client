class Win {
    constructor(values) {
        this.selection = +values.shift();
        this.stake = +values.shift();

        if (!this.selection || !this.stake) {
            throw new Error('Selection and stake needs to passed for a WIN product.');
        }

        if (!(this.selection > 0 && this.stake > 0)) {
            throw new Error('Selection and stake must be positive number.');
        }
    }
}

module.exports = {
    Win
};
