const express = require('express');
const countStudents = require('./3-read_file_async');

// Initialize Express app
const app = express();

// Handle the root route "/"
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Handle the "/students" route
app.get('/students', (req, res) => {
    const databasePath = process.argv[2];  // Get the database file path from command-line arguments

    res.write('This is the list of our students\n');

    countStudents(databasePath)
        .then(() => {
            res.end();
        })
        .catch((err) => {
            res.write(err.message + '\n');
            res.end();
        });
});

// Start the server on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app for testing or further use
module.exports = app;

