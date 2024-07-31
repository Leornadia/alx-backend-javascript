import React from 'react';

// Subject interface
interface Subject {
  getRequirements(): string;
  getAvailableTeacher(): string;
  setTeacher(teacher: Teacher): void;
}

// Teacher interface
interface Teacher {
  experienceTeachingC?: number;
}

// Cpp Subject
export const cpp: Subject = {
  getRequirements(): string {
    return 'C++ requirements';
  },
  getAvailableTeacher(): string {
    return 'Available C++ teacher';
  },
  setTeacher(teacher: Teacher): void {
    console.log('C++ teacher set');
  }
};

// Java Subject
export const java: Subject = {
  getRequirements(): string {
    return 'Java requirements';
  },
  getAvailableTeacher(): string {
    return 'Available Java teacher';
  },
  setTeacher(teacher: Teacher): void {
    console.log('Java teacher set');
  }
};

// React Subject
export const react: Subject = {
  getRequirements(): string {
    return 'React requirements';
  },
  getAvailableTeacher(): string {
    return 'Available React teacher';
  },
  setTeacher(teacher: Teacher): void {
    console.log('React teacher set');
  }
};

// Create cTeacher
export const cTeacher: Teacher = {
  experienceTeachingC: 10
};

// Main execution
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('\nJava');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('\nReact');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
