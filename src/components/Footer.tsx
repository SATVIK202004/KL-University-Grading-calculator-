import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900 text-red-100 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-white mb-2">Developer</h3>
          <p className="text-xl text-red-100">Peddisetty Venkat Satvik</p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <a
            href="https://github.com/SATVIK202004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-200 hover:text-white transition-colors transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/peddisetty-venkat-satvik-363903284/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-200 hover:text-white transition-colors transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://www.instagram.com/iamsatvik20/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-200 hover:text-white transition-colors transform hover:scale-110"
          >
            <Instagram size={28} />
          </a>
        </div>

        <div className="text-center">
          <p className="mb-3 flex items-center justify-center gap-2">
            Made with <Heart size={20} className="text-red-400 animate-pulse" /> by Satvik
          </p>
          <p className="text-sm text-red-300">
            ⚠️ Warning: This tool is for educational purposes only. 
            Unauthorized use or distribution is prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
};