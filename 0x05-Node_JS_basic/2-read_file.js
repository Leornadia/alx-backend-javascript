const fs = require('fs');

const countStudents = (path) => {
  let data;
  
  try {
    // Read file synchronously
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    // Throw error if file cannot be read
    throw new Error('Cannot load the database');
  }

  // Split data into lines and filter out empty lines
  const lines = data.trim().split('\n').filter(line => line.trim() !== '');
  
  // Remove header row
  const studentLines = lines.slice(1);
  
  // Total number of students
  console.log(`Number of students: ${studentLines.length}`);
  
  // Group students by field
  const fieldGroups = {};
  
  studentLines.forEach(line => {
    const [firstname, lastname, age, field] = line.split(',');
    
    if (!fieldGroups[field]) {
      fieldGroups[field] = [];
    }
    fieldGroups[field].push(firstname);
  });
  
  // Print students by field
  for (const [field, students] of Object.entries(fieldGroups)) {
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  }
};

module.exports = countStudents;
