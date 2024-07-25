export default class Airport {
    // Constructor with attributes
    constructor(name, code) {
        // Store name and code in private properties
        this._name = name;
        this._code = code;
    }

    // Override the toString method to return the airport code
    toString() {
        return `[object ${this._code}]`;
    }
}
