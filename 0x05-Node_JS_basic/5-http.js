const http = require('http');
const fs = require('fs');
const { parse } = require('csv-parse');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2]; // Pass CSV file as a command-line argument

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Read the CSV file asynchronously
    fs.readFile(database, 'utf-8', (err, data) => {
      if (err) {
        res.end('Cannot load the database');
        return;
      }

      // Parse CSV data
      const records = [];
      parse(data, {
        columns: true,
        skip_empty_lines: true,
      })
        .on('data', (row) => {
          records.push(row);
        })
        .on('end', () => {
          // Process student data
          const studentsByField = {};
          records.forEach((student) => {
            const field = student.field;
            if (!studentsByField[field]) {
              studentsByField[field] = [];
            }
            studentsByField[field].push(student.firstname);
          });

          // Sort fields alphabetically and display students
          const fields = Object.keys(studentsByField).sort();
          fields.forEach((field) => {
            const studentList = studentsByField[field];
            res.write(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`);
          });
          res.end();
        });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;

