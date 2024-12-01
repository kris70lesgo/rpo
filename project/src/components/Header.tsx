import React, { useState } from 'react';
import { Github } from 'lucide-react';

export function Header() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 p-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">ChillDev</h1>
          <nav>
            <button
              onClick={() => setShowAbout(!showAbout)}
              className="text-white hover:text-white/80 transition-colors"
            >
              About
            </button>
          </nav>
        </div>
      </header>

      {showAbout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md">
            <h2 className="text-2xl font-bold mb-4">About ChillDev</h2>
            <p className="mb-4">A fun and interactive way to master CSS centering techniques.</p>
            <div className="flex items-center gap-2 mb-4">
              <p>Made with ❤️ by Kris</p>
              <a
                href="https://github.com/kris70lesgo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={() => setShowAbout(false)}
              className="w-full py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-md hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}