import React from 'react';
import { Trash2 } from 'lucide-react';
import { GradeSelector } from './GradeSelector';
import { Subject } from '../types';

interface SubjectRowProps {
  subject: Subject;
  onUpdate: (id: string, field: keyof Subject, value: number) => void;
  onDelete: (id: string) => void;
}

export const SubjectRow: React.FC<SubjectRowProps> = ({
  subject,
  onUpdate,
  onDelete,
}) => {
  return (
    <div className="flex gap-4 items-center mb-4">
      <div className="flex-1">
        <GradeSelector
          value={subject.grade}
          onChange={(value) => onUpdate(subject.id, 'grade', value)}
        />
      </div>
      <div className="flex-1">
        <input
          type="number"
          min="1"
          max="4"
          value={subject.credits || ''}
          onChange={(e) => onUpdate(subject.id, 'credits', Number(e.target.value))}
          className="w-full p-2 border rounded-md"
          placeholder="Credits"
        />
      </div>
      <button
        onClick={() => onDelete(subject.id)}
        className="p-2 text-red-500 hover:text-red-700 transition-colors"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};