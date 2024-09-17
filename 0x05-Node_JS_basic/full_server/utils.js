const fs = require('fs');

const readDatabase = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const content = data.split('\n').filter((line) => line);
            const studentsByField = {};

            for (const line of content.slice(1)) {
                const [firstName, , , field] = line.split(',');
                if (field) {
                    if (!studentsByField[field]) {
                        studentsByField[field] = [];
                    }
                    studentsByField[field].push(firstName);
                }
            }
            resolve(studentsByField);
        });
    });
};

module.exports = { readDatabase };

