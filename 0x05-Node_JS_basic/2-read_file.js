const fs = require('fs');

function countStudents(path) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(path, 'utf8');

        // Split the data into lines
        const lines = data.split('\n').filter(line => line.trim() !== '');

        // Remove the header line
        const students = lines.slice(1);

        // Initialize counters and lists
        const fieldCounts = {};
        const fieldLists = {};

        // Process each student line
        students.forEach(student => {
            const [firstName, lastName, age, field] = student.split(',');

            if (!fieldCounts[field]) {
                fieldCounts[field] = 0;
                fieldLists[field] = [];
            }

            fieldCounts[field]++;
            fieldLists[field].push(firstName);
        });

        // Log the total number of students
        console.log(`Number of students: ${students.length}`);

        // Log the number of students in each field and their list of first names
        for (const field in fieldCounts) {
            console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldLists[field].join(', ')}`);
        }
    } catch (error) {
        // Throw an error if the database is not available
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
