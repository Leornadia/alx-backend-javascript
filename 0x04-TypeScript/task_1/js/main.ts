interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example of trying to modify firstName (this will cause a TypeScript error)
// teacher3.firstName = 'Jane'; // Uncommenting this line will result in a compile-time error

// Adding a new attribute dynamically
teacher3.subject = 'Math';

console.log(teacher3);

// Creating a director using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Example usage of printTeacher function
console.log(printTeacher("John", "Doe"));

// ... (previous code remains the same)

// Interface for the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface for the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of StudentClass
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// ... (previous code remains the same)

// Example usage of StudentClass
const student = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // Should output: Currently working
console.log(student.displayName()); // Should output: John
