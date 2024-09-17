const express = require('express');
const fs = require('fs').promises;
const { exec } = require('child_process');

const app = express();
const PORT = 1245;
const db = process.argv[2];

// ... (keep the countStudents function and routes as they were) ...

function killExistingProcess(port, callback) {
  exec(`lsof -ti tcp:${port} | xargs kill`, (error) => {
    if (error) {
      console.error(`Failed to kill process on port ${port}: ${error}`);
    } else {
      console.log(`Killed existing process on port ${port}`);
    }
    callback();
  });
}

function startServer(port) {
  killExistingProcess(port, () => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is still busy, trying ${port + 1}...`);
        startServer(port + 1);
      } else {
        console.error(err);
      }
    });
  });
}

startServer(PORT);

module.exports = app;
