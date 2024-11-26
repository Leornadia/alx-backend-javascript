const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => {
  // Check if file exists and is a file
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read file lines
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  // Initialize student groups
  const studentGroups = {};

  // Parse header to get field names
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  // Process each student line
  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    
    // Skip invalid records
    if (studentRecord.length !== dbFieldNames.length) continue;

    // Get field from last column
    const field = studentRecord[studentRecord.length - 1].trim();

    // Initialize field group if not exists
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }

    // Create student object
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  // Calculate total number of students
  const totalStudents = Object
    .values(studentGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length, 0);

  // Log total number of students
  console.log(`Number of students: ${totalStudents}`);

  // Log students by field
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
