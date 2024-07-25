import Building from './5-building.js';

// Define the SkyHighBuilding class that extends Building
export default class SkyHighBuilding extends Building {
    // Constructor with attributes
    constructor(sqft, floors) {
        // Call the parent constructor to initialize sqft
        super(sqft);
        // Store floors in a private property
        this._floors = floors;
    }

    // Getter for sqft (inherited from Building)
    get sqft() {
        return super.sqft; // Using the parent's getter
    }

    // Getter for floors
    get floors() {
        return this._floors;
    }

    // Override evacuationWarningMessage method
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors.`;
    }
}
