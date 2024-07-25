import ClassRoom from './0-classroom.js';

// Function to initialize classrooms with specific sizes
export default function initializeRooms() {
    // Creating an array of ClassRoom instances
    const rooms = [
        new ClassRoom(19),  // First classroom with 19 students
        new ClassRoom(20),  // Second classroom with 20 students
        new ClassRoom(34)   // Third classroom with 34 students
    ];
    // Returning the array of classroom instances
    return rooms;
}
