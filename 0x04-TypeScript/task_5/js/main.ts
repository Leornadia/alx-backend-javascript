// task_5/js/main.ts

// Interface for MajorCredits
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

// Interface for MinorCredits
interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits',
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits',
  };
}
