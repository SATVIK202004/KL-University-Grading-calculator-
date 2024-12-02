import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GradeCalculator } from './components/GradeCalculator';
import { SplashScreen } from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-red-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold mb-3 text-red-800">How SGPA is Calculated</h2>
              <p className="text-gray-700">
                SGPA is calculated by multiplying each subject's grade points with its credits,
                summing these products, and dividing by the total credits for the semester.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500 hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold mb-3 text-red-800">How CGPA is Calculated</h2>
              <p className="text-gray-700">
                CGPA considers all semesters, multiplying each semester's SGPA by its total credits,
                summing these products, and dividing by the total credits across all semesters.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-12 border-t-4 border-red-500">
            <h2 className="text-xl font-bold mb-3 text-red-800">KLU Grade Points</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-red-50 rounded-lg text-center hover:bg-red-100 transition-colors">
                <p className="font-bold text-red-700">O</p>
                <p className="text-red-600">10 points</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg text-center hover:bg-red-100 transition-colors">
                <p className="font-bold text-red-700">A+</p>
                <p className="text-red-600">9 points</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg text-center hover:bg-red-100 transition-colors">
                <p className="font-bold text-red-700">A</p>
                <p className="text-red-600">8 points</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg text-center hover:bg-red-100 transition-colors">
                <p className="font-bold text-red-700">B+</p>
                <p className="text-red-600">7 points</p>
              </div>
            </div>
          </div>

          <GradeCalculator />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;