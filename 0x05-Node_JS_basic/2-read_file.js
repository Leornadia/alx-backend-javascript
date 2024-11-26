const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
  try {
    const students = [];
    const fields = {};

    fs.readFileSync(path, 'utf8')
      .pipe(csv())
      .on('data', (row) => {
        if (row.firstname && row.lastname && row.age && row.field) {
          students.push(row.firstname);
          fields[row.field] = fields[row.field] || [];
          fields[row.field].push(row.firstname);
        }
      })
      .on('end', () => {
        console.log(`Number of students: ${students.length}`);
        for (const field in fields) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents; 
