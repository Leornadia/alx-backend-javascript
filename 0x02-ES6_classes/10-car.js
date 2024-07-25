class Car {
    // Constructor with attributes
    constructor(brand, motor, color) {
        // Store attributes in private properties
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    // Method to clone the car
    cloneCar() {
        // Create a new instance of the Car class with the same attributes
        return new this.constructor(this._brand, this._motor, this._color);
    }
}

// Export the Car class
export default Car;
