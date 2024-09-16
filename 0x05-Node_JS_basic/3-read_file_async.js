const fs = require('fs').promises;

async function countStudents(path)
{
    try
    {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.trim().split('\n');

        if (lines.length < 2)
        {
            throw new Error('Cannot load the database');
        }

        const students = lines.slice(1).filter(line => line.trim() !== '');
        console.log(`Number of students: ${students.length}`);

        const fields = {};

        students.forEach((student) =>
        {
            const [firstname, , , field] = student.split(',');

            if (!fields[field])
            {
                fields[field] = [];
            }

            fields[field].push(firstname);
        });

        for (const field in fields)
        {
            const list = fields[field].join(', ');
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
        }
    }
    catch (err)
    {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
