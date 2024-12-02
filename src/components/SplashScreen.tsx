import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-red-600 flex items-center justify-center z-50">
      <div className="text-center relative">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 animate-ping bg-red-400 rounded-full opacity-75" style={{ width: '150px', height: '150px' }} />
            <img 
              src="data:image/jpeg;base64,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" 
              alt="KL University"
              className="w-64 h-auto mb-8 relative z-10 animate-pulse"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mb-8 mt-32">
          <BookOpen size={36} className="text-white animate-bounce" />
          <GraduationCap size={48} className="text-white animate-bounce delay-100" />
          <Award size={36} className="text-white animate-bounce delay-200" />
        </div>
        <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">KLU Grade Calculator</h1>
        <p className="text-red-100 text-xl">Loading your academic companion...</p>
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" />
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100" />
          <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200" />
        </div>
      </div>
    </div>
  );
};
