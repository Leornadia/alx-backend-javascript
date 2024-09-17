// Import required modules
import express from 'express';
import fs from 'fs';
import { promisify } from 'util';
import csvParse from 'csv-parse';

// Promisify readFile for asynchronous file reading
const readFileAsync = promisify(fs.readFile);

// Function to read the CSV database and return the student information
const readDatabase = async (filePath) => {
  const data = await readFileAsync(filePath, { encoding: 'utf8' });
  const records = [];

  await new Promise((resolve, reject) => {
    csvParse(data, { delimiter: ',' }, (err, result) => {
      if (err) {
        reject(err);
      } else {
        result.forEach((row) => {
          if (row[0] && row[1] && row[2]) { // Avoid empty lines
            records.push({ firstname: row[0], field: row[2] });
          }
        });
        resolve();
      }
    });
  });

  const studentsByField = {};

  records.forEach((student) => {
    const { field, firstname } = student;
    if (!studentsByField[field]) {
      studentsByField[field] = [];
    }
    studentsByField[field].push(firstname);
  });

  return studentsByField;
};

// Initialize Express application
const app = express();

// Route for '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for '/students'
app.get('/students', async (req, res) => {
  const filePath = process.argv[2]; // Get the file path passed as argument
  try {
    const students = await readDatabase(filePath);

    let responseText = 'This is the list of our students\n';
    let totalStudents = 0;

    Object.keys(students).sort().forEach((field) => {
      const fieldStudents = students[field];
      totalStudents += fieldStudents.length;
      responseText += `Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.join(', ')}\n`;
    });

    res.send(responseText);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

export default app;

