const { processInput } = require('./process-input');
const { Result } = require('./result');
const { Bet } = require('./bet');

const bet = 'Bet:W:1:1';
const result = 'Result:1:2:3';
const invalidResultNeg = 'Result:1:-2:3';
const invalidResultEq = 'Result:1:2:2';
const invalid = '1:2:3';

describe('processInput', () => {
    let input;

    beforeEach(() => {
        input = processInput(bet);
    });

    it('should create an instance', () => {
        expect(input).toBeDefined();
    });

    describe('Bet', () => {
        beforeEach(() => {
            input = processInput(bet);
        });

        it('is a bet', () => {
            expect(input instanceof Bet).toBeTruthy();
        });

        it('is not a result', () => {
            expect(input instanceof Result).toBeFalsy();
        });
    });

    describe('Result', () => {
        beforeEach(() => {
            input = processInput(result);
        });

        it('is a result', () => {
            expect(input instanceof Result).toBeTruthy();
        });

        it('is not a bet', () => {
            expect(input instanceof Bet).toBeFalsy();
        });

        it('first is valid', () => {
            expect(input.first).toBe(1);
        });

        it('second is valid', () => {
            expect(input.second).toBe(2);
        });

        it('third is valid', () => {
            expect(input.third).toBe(3);
        });
    });

    describe('Invalid result', () => {
        let createNonPositive;
        let createEq;

        beforeEach(() => {
            createNonPositive = () => processInput(invalidResultNeg);
            createEq = () => processInput(invalidResultEq);
        });

        it('throws an error if number non positive', () => {
            expect(createNonPositive).toThrowError();
        });

        it('throws an error if same number', () => {
            expect(createEq).toThrowError();
        });
    });

    describe('Invalid input', () => {
        let createInput;

        beforeEach(() => {
            createInput = () => processInput(invalid);
        });

        it('throws an error', () => {
            expect(createInput).toThrowError();
        });
    });
});
