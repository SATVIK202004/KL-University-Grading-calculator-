import React from 'react';
import { gradeScale } from '../types';

interface GradeSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

export const GradeSelector: React.FC<GradeSelectorProps> = ({ value, onChange }) => {
  return (
    <select
      className="w-full p-2 border rounded-md bg-white"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option value="">Select Grade</option>
      {Object.entries(gradeScale).map(([grade, points]) => (
        <option key={grade} value={points}>
          {grade} ({points})
        </option>
      ))}
    </select>
  );
};