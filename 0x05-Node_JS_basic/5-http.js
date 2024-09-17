const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const HOST = 'localhost';
let db = process.argv[2];

/**
 * Counts the students in a CSV data file.
 * @param {string} path The path to the CSV data file.
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);
    
    let output = `Number of students: ${students.length}\n`;
    
    const fields = {};
    students.forEach(student => {
      const [firstName, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });
    
    for (const [field, studentList] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
    }
    
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const studentsData = await countStudents(db);
      res.end(studentsData);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

module.exports = app;
