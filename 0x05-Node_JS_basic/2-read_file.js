const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
function countStudents(path) 
{
    try 
    {
        // Read the file content
        const data = fs.readFileSync(path, 'utf-8').trim();

        // Split data into lines and validate content
        const lines = data.split('\n');
        if (lines.length <= 1) 
        {
            throw new Error('Cannot load the database');
        }

        // Extract header and valid student data
        const students = lines.slice(1).filter((line) => line.trim() !== '');
        const totalStudents = students.length;

        console.log(`Number of students: ${totalStudents}`);

        // Group students by fields
        const fields = {};
        students.forEach((student) => 
        {
            const [firstname, , , field] = student.split(',');

            if (field) 
            {
                if (!fields[field]) 
                {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            }
        });

        // Print the field-specific data
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

