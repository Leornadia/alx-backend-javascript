const fs = require('fs').promises;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const students = lines.slice(1);
        
        console.log(`Number of students: ${students.length}`);
        
        const fields = {};
        students.forEach(student => {
          const [firstname, , , field] = student.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });
        
        for (const [field, students] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
        
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;

