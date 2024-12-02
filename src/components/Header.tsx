import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-white py-8 shadow-lg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500 rounded-full animate-pulse" />
              <img 
                src="https://www.kluniversity.in/images/klu-logo-white.png"
                alt="KL University"
                className="h-16 w-auto relative z-10"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">KLU Grade Calculator</h1>
              <p className="text-red-100 text-lg">Calculate your SGPA, CGPA, and percentage easily</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <BookOpen size={32} className="text-white" />
            <GraduationCap size={40} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};