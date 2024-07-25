export default class Building {
    // Constructor with attributes
    constructor(sqft) {
        // Store sqft in a private property
        this._sqft = sqft;
    }

    // Getter for sqft
    get sqft() {
        return this._sqft;
    }

    // Check if the evacuationWarningMessage method is implemented
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}
