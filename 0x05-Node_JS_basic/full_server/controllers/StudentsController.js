// full_server/controllers/StudentsController.js
const readDatabase = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        const databaseFile = process.argv[2]; // Get the database file from the arguments

        try {
            const students = await readDatabase(databaseFile);
            let responseText = 'This is the list of our students\n';
            
            const fields = Object.keys(students).sort(); // Sort fields alphabetically
            fields.forEach((field) => {
                const studentList = students[field];
                responseText += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
            });

            res.status(200).send(responseText.trim()); // Return the final string
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const databaseFile = process.argv[2]; // Get the database file from the arguments
        const { major } = req.params;

        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const students = await readDatabase(databaseFile);
            const studentList = students[major];

            if (studentList) {
                res.status(200).send(`List: ${studentList.join(', ')}`);
            } else {
                res.status(200).send(`List: `);
            }
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }
}

module.exports = StudentsController;

