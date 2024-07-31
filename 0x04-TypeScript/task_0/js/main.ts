// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

// Create an array named studentsList containing the two students
const studentsList: Array<Student> = [student1, student2];

// Function to render the table
function renderTable(students: Array<Student>): void {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  students.forEach((student) => {
    const row = tbody.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
