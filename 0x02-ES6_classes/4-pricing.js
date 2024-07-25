import Currency from './3-currency.js';

// Define the Pricing class
export default class Pricing {
    // Constructor with attributes
    constructor(amount, currency) {
        // Store attributes in private properties
        this._amount = amount;
        this._currency = currency;  // This should be an instance of Currency
    }

    // Getter for amount
    get amount() {
        return this._amount;
    }

    // Setter for amount
    set amount(value) {
        this._amount = value;
    }

    // Getter for currency
    get currency() {
        return this._currency;
    }

    // Setter for currency
    set currency(value) {
        this._currency = value;  // This should be an instance of Currency
    }

    // Method to display full price
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    // Static method to convert price
    static convertPrice(amount, conversionRate) {
        return amount * conversionRate; // Return the converted amount
    }
}
