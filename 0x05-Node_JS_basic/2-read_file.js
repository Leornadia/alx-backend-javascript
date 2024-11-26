const fs = require('fs');

function countStudents(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }
    const header = lines[0];
    const studentLines = lines.slice(1);
    const students = studentLines.map(line => {
      const [firstName, field] = line.split(',');
      return { firstName, field };
    });
    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);
    const fieldData = {};
    students.forEach(student => {
      if (!fieldData[student.field]) {
        fieldData[student.field] = { count: 0, list: [] };
      }
      fieldData[student.field].count++;
      fieldData[student.field].list.push(student.firstName);
    });
    for (const field in fieldData) {
      console.log(`Number of students in ${field}: ${fieldData[field].count}. List: ${fieldData[field].list.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
