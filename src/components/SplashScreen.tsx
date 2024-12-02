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
              src="https://www.kluniversity.in/images/klu-logo-white.png" 
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