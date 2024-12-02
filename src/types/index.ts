export interface Subject {
  id: string;
  grade: number;
  credits: number;
}

export interface Semester {
  id: string;
  subjects: Subject[];
}

export const gradeScale = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'F': 0
} as const;