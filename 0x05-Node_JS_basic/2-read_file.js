const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);
    
    process.stdout.write(`Number of students: ${students.length}\n`);
    
    const fields = {};
    students.forEach(student => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    
    for (const [field, students] of Object.entries(fields)) {
      process.stdout.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
    }
  } catch (error) {
    throw 'Cannot load the database';
  }
}

module.exports = countStudents;
