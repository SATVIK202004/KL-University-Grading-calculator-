import React, { useState } from 'react';
import { Plus, Calculator as CalculatorIcon } from 'lucide-react';
import { Subject, Semester } from '../types';
import { SubjectRow } from './SubjectRow';
import { calculateSGPA, calculateCGPA, convertToPercentage } from '../utils/calculations';

export const GradeCalculator: React.FC = () => {
  const [semesters, setSemesters] = useState<Semester[]>([{
    id: '1',
    subjects: [{ id: '1', grade: 0, credits: 0 }]
  }]);

  const addSubject = (semesterId: string) => {
    setSemesters(prev => prev.map(sem => {
      if (sem.id === semesterId) {
        return {
          ...sem,
          subjects: [...sem.subjects, { id: crypto.randomUUID(), grade: 0, credits: 0 }]
        };
      }
      return sem;
    }));
  };

  const addSemester = () => {
    setSemesters(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        subjects: [{ id: crypto.randomUUID(), grade: 0, credits: 0 }]
      }
    ]);
  };

  const updateSubject = (semesterId: string, subjectId: string, field: keyof Subject, value: number) => {
    setSemesters(prev => prev.map(sem => {
      if (sem.id === semesterId) {
        return {
          ...sem,
          subjects: sem.subjects.map(sub => 
            sub.id === subjectId ? { ...sub, [field]: value } : sub
          )
        };
      }
      return sem;
    }));
  };

  const deleteSubject = (semesterId: string, subjectId: string) => {
    setSemesters(prev => prev.map(sem => {
      if (sem.id === semesterId) {
        return {
          ...sem,
          subjects: sem.subjects.filter(sub => sub.id !== subjectId)
        };
      }
      return sem;
    }));
  };

  const cgpa = calculateCGPA(semesters);
  const percentage = convertToPercentage(cgpa);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {semesters.map((semester, index) => (
        <div key={semester.id} className="mb-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Semester {index + 1}</h2>
          {semester.subjects.map(subject => (
            <SubjectRow
              key={subject.id}
              subject={subject}
              onUpdate={(subjectId, field, value) => 
                updateSubject(semester.id, subjectId, field, value)
              }
              onDelete={(subjectId) => deleteSubject(semester.id, subjectId)}
            />
          ))}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => addSubject(semester.id)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <Plus size={20} /> Add Subject
            </button>
            <div className="text-lg">
              SGPA: {calculateSGPA(semester.subjects)}
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={addSemester}
        className="w-full py-3 mb-6 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Plus size={20} /> Add Semester
      </button>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-4 text-xl font-bold">
          <CalculatorIcon size={24} className="text-blue-600" />
          <h2>Results</h2>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">CGPA</p>
            <p className="text-3xl font-bold text-blue-600">{cgpa}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">Percentage</p>
            <p className="text-3xl font-bold text-green-600">{percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};