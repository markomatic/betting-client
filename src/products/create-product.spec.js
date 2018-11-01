const { Exacta } = require('./exacta');
const { Place } = require('./place');
const { Win } = require('./win');
const { createProduct } = require('./create-product');

const win = ['W', '1', '2'];
const place = ['P', '1', '2'];
const exacta = ['E', '1,2', '3'];
const invalidWin = ['W', '-1', '1'];
const invalidPlace = ['P', 'Z', '1'];
const invalidExacta = ['E', '2', '1'];

describe('createProduct', () => {
    let product;

    beforeEach(() => {
        product = createProduct([...win]);
    });

    it('should create an instance', () => {
        expect(product).toBeDefined();
    });

    describe('Win', () => {
        beforeEach(() => {
            product = createProduct([...win]);
        });

        it('is a win', () => {
            expect(product instanceof Win).toBeTruthy();
        });

        it('valid selection', () => {
            expect(product.selection).toBe(1);
        });

        it('valid stake', () => {
            expect(product.stake).toBe(2);
        });
    });

    describe('Invalid win', () => {
        let createProduct;

        beforeEach(() => {
            createProduct = () => createProduct([...invalidWin]);
        });

        it('throws an error', () => {
            expect(createProduct).toThrowError();
        });
    });

    describe('Place', () => {
        beforeEach(() => {
            product = createProduct([...place]);
        });

        it('is a place', () => {
            expect(product instanceof Place).toBeTruthy();
        });

        it('valid selection', () => {
            expect(product.selection).toBe(1);
        });

        it('valid stake', () => {
            expect(product.stake).toBe(2);
        });
    });

    describe('Invalid place', () => {
        let createProduct;

        beforeEach(() => {
            createProduct = () => createProduct([...invalidPlace]);
        });

        it('throws an error', () => {
            expect(createProduct).toThrowError();
        });
    });

    describe('Exacta', () => {
        beforeEach(() => {
            product = createProduct([...exacta]);
        });

        it('is an exacta', () => {
            expect(product instanceof Exacta).toBeTruthy();
        });

        it('valid first selection', () => {
            expect(product.firstSelection).toBe(1);
        });

        it('valid second selection', () => {
            expect(product.secondSelection).toBe(2);
        });

        it('valid stake', () => {
            expect(product.stake).toBe(3);
        });
    });

    describe('Invalid exacta', () => {
        let createProduct;

        beforeEach(() => {
            createProduct = () => createProduct([...invalidExacta]);
        });

        it('throws an error', () => {
            expect(createProduct).toThrowError();
        });
    });
});
