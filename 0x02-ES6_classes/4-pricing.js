import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        this._amount = this.validateAmount(amount);
        this._currency = this.validateCurrency(currency);
    }

    validateAmount(amount) {
        if (typeof amount !== 'number') {
            throw new TypeError('Amount must be a number');
        }
        return amount;
    }

    validateCurrency(currency) {
        if (!(currency instanceof Currency)) {
            throw new TypeError('Currency must be an instance of the Currency class');
        }
        return currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = this.validateAmount(value);
    }

    get currency() {
        return this._currency;
    }

    set currency(value) {
        this._currency = this.validateCurrency(value);
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new TypeError('Both amount and conversion rate must be numbers');
        }
        return amount * conversionRate;
    }
}

