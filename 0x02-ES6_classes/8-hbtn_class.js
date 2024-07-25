export default class HolbertonClass {
    // Constructor with attributes
    constructor(size, location) {
        // Store size and location in private properties
        this._size = size;
        this._location = location;
    }

    // Override the valueOf method to return the size
    valueOf() {
        return this._size;
    }

    // Override the toString method to return the location
    toString() {
        return this._location;
    }
}
