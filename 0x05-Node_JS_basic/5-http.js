const http = require('http');
const { readFile } = require('fs').promises;

const hostname = '127.0.0.1';
const port = 1245;

async function countStudents(path) {
  try {
    const data = await readFile(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);
    
    let output = `Number of students: ${students.length}\n`;
    
    const fields = {};
    students.forEach(student => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    
    for (const [field, students] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }
    
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const databasePath = process.argv[2];
      const studentsData = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentsData}`);
    } catch (error) {
      res.statusCode = 404;
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
