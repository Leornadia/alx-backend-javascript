export default class HolbertonCourse {
    // Constructor with attributes
    constructor(name, length, students) {
        // Type verification for name
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        // Type verification for length
        if (typeof length !== 'number') {
            throw new TypeError('Length must be a number');
        }
        // Type verification for students
        if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        
        // Store attributes in private properties
        this._name = name;
        this._length = length;
        this._students = students;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name with type verification
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = value;
    }

    // Getter for length
    get length() {
        return this._length;
    }

    // Setter for length with type verification
    set length(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = value;
    }

    // Getter for students
    get students() {
        return this._students;
    }

    // Setter for students with type verification
    set students(value) {
        if (!Array.isArray(value) || !value.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = value;
    }
}
