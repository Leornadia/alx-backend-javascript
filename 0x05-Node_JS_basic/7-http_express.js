const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const database = process.argv[2]; // Get the database filename from command line argument

  fs.readFile(database, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading database');
      return;
    }

    const students = data.split('\n').filter(line => line.trim() !== '');
    const csStudents = students.filter(student => student.startsWith('CS:'));
    const sweStudents = students.filter(student => student.startsWith('SWE:'));

    res.send(`This is the list of our students\n
Number of students: ${students.length}\n
Number of students in CS: ${csStudents.length}. List: ${csStudents.map(student => student.substring(3)).join(', ')}\n
Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(student => student.substring(4)).join(', ')}\n`);
  });
});

module.exports = app;

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});
