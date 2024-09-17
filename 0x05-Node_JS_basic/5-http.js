const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

// Function to read the database
function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }
            const lines = data.trim().split('\n').slice(1); // Skip header
            const students = {};

            lines.forEach((line) => {
                const [firstName, field] = line.split(',');
                if (firstName && field) {
                    if (!students[field]) {
                        students[field] = [];
                    }
                    students[field].push(firstName);
                }
            });
            resolve(students);
        });
    });
}

// Create HTTP server
const app = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        const filePath = process.argv[2];
        readDatabase(filePath)
            .then((students) => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('This is the list of our students\n');
                let totalCount = 0;

                // Sort fields alphabetically and display the result
                Object.keys(students).sort().forEach((field) => {
                    const studentList = students[field];
                    totalCount += studentList.length;
                    res.write(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`);
                });

                res.end();
            })
            .catch((err) => {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end(err.message);
            });
    }
});

// Listen on port 1245
app.listen(1245);

// Export the app
module.exports = app;

