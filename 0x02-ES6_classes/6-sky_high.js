
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = this.validateFloors(floors);
    }

    validateFloors(floors) {
        if (typeof floors !== 'number') {
            throw new TypeError('Floors must be a number');
        }
        return floors;
    }

    get floors() {
        return this._floors;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}

