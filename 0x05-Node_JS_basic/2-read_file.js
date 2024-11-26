const fs = require('fs');

function countStudents(path) 
{
    try 
    {
        const data = fs.readFileSync(path, 'utf-8'); // Read file synchronously
        const lines = data.split('\n').filter((line) => line.trim() !== ''); // Filter out empty lines

        if (lines.length === 0) 
        {
            throw new Error('Cannot load the database');
        }

        const students = lines.slice(1); // Remove the header line
        const totalStudents = students.length;

        console.log(`Number of students: ${totalStudents}`);

        const fields = {};
        for (const student of students) 
        {
            const [firstname, lastname, age, field] = student.split(',');

            if (!fields[field]) 
            {
                fields[field] = [];
            }
            fields[field].push(firstname);
        }

        for (const [field, firstnames] of Object.entries(fields)) 
        {
            console.log(`Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`);
        }
    } 
    catch (err) 
    {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;

