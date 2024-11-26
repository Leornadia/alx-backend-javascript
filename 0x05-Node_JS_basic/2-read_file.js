const fs = require('fs');

const countStudents = (dataPath) => {
  // Check if the file exists
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }

  // Check if it's a file
  const stats = fs.statSync(dataPath);
  if (!stats.isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read the file content
  let content;
  try {
    content = fs.readFileSync(dataPath, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  // Split content into lines and remove empty lines
  const lines = content.split('\n').filter(line => line.trim() !== '');

  // If no data lines, print zero students
  if (lines.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  // Skip the header line
  const dataLines = lines.slice(1);

  // Create a Map to store students by field
  const fieldsMap = new Map();

  // Process each data line
  dataLines.forEach(line => {
    const parts = line.split(',').map(part => part.trim());
    const firstName = parts[0];
    const field = parts[1];

    if (fieldsMap.has(field)) {
      fieldsMap.get(field).push(firstName);
    } else {
      fieldsMap.set(field, [firstName]);
    }
  });

  // Calculate total number of students
  const totalStudents = Array.from(fieldsMap.values()).reduce((sum, students) => sum + students.length, 0);
  console.log(`Number of students: ${totalStudents}`);

  // Convert Map to an array and sort by field
  const fieldsArray = Array.from(fieldsMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  // Print each field's students
  fieldsArray.forEach(([field, students]) => {
    // Sort the list of students alphabetically
    const sortedStudents = students.sort();
    console.log(`Number of students in ${field}: ${students.length}. List: ${sortedStudents.join(', ')}`);
  });
};

module.exports = countStudents;
