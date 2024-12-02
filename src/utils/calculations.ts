import { Subject, Semester } from '../types';

export const calculateSGPA = (subjects: Subject[]): number => {
  const totalCredits = subjects.reduce((sum, subject) => sum + subject.credits, 0);
  const totalPoints = subjects.reduce(
    (sum, subject) => sum + subject.grade * subject.credits,
    0
  );
  
  return totalCredits ? Number((totalPoints / totalCredits).toFixed(2)) : 0;
};

export const calculateCGPA = (semesters: Semester[]): number => {
  const totalCredits = semesters.reduce(
    (sum, semester) => 
      sum + semester.subjects.reduce((credits, subject) => credits + subject.credits, 0),
    0
  );

  const totalPoints = semesters.reduce(
    (sum, semester) => 
      sum + semester.subjects.reduce(
        (points, subject) => points + subject.grade * subject.credits,
        0
      ),
    0
  );

  return totalCredits ? Number((totalPoints / totalCredits).toFixed(2)) : 0;
};

export const convertToPercentage = (cgpa: number): number => {
  return Number(((cgpa - 0.75) * 10).toFixed(2));
};