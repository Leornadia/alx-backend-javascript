const express = require('express');

// Initialize Express app
const app = express();

// Define the root route
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

// Start the server on port 1245
app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;

