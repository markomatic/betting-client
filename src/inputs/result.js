class Result {
    constructor(values) {
        this.first = +values.shift();
        this.second = +values.shift();
        this.third = +values.shift();

        if (!(this.first > 0 && this.second > 0 && this.third > 0)) {
            throw new Error('Horse number must be greater than 0.');
        }

        if (this.first === this.second || this.second === this.third) {
            throw new Error('Same horse can not be on two places.');
        }
    }
}

module.exports = {
    Result
};
