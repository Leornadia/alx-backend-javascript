const fs = require('fs');

const countStudents = (path) => {
  try {
    // Read the file synchronously and split into lines, removing any empty lines
    const data = fs.readFileSync(path, 'utf-8').split('\n').filter(Boolean); 

    // Get the number of students (excluding the header)
    const numStudents = data.length - 1;
    console.log(`Number of students: ${numStudents}`);

    // Create an object to store student counts by field
    const fieldCounts = {};

    // Iterate through student data (starting from the second line)
    for (let i = 1; i < data.length; i += 1) {
      const student = data[i].split(',');
      const field = student[student.length - 1]; 

      // If the field already exists, update the count and list
      if (fieldCounts[field]) {
        fieldCounts[field].count += 1;
        fieldCounts[field].names.push(student[0]);
      } else { // Otherwise, create a new entry for the field
        fieldCounts[field] = { count: 1, names: [student[0]] };
      }
    }

    // Log the student counts for each field
    Object.keys(fieldCounts).forEach((field) => {
      console.log(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${fieldCounts[field].names.join(', ')}`);
    });

  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
