import React, { useState } from 'react';
import { Challenge, CenteringMethod } from '../types';
import { Trophy, Lightbulb } from 'lucide-react';

const challenges: Challenge[] = [
  {
    id: 'challenge-1',
    title: 'Flexbox Center',
    description: 'Center a div horizontally and vertically using Flexbox',
    method: 'flexbox',
    targetProperties: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  {
    id: 'challenge-2',
    title: 'Grid Master',
    description: 'Center using CSS Grid with a single property',
    method: 'grid',
    targetProperties: {
      placeItems: 'center',
    },
  },
];

interface GameModeProps {
  onMethodChange: (method: CenteringMethod) => void;
  onPropertiesChange: (properties: Record<string, string>) => void;
}

export function GameMode({ onMethodChange, onPropertiesChange }: GameModeProps) {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [score, setScore] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [localProperties, setLocalProperties] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const challenge = challenges[currentChallenge];

  React.useEffect(() => {
    onMethodChange(challenge.method);
  }, [challenge.method, onMethodChange]);

  const checkSolution = () => {
    onPropertiesChange(localProperties);
    const isCorrect = Object.entries(challenge.targetProperties).every(
      ([key, value]) => localProperties[key] === value
    );

    if (isCorrect) {
      setShowSuccess(true);
      setScore(score + Math.max(100 - hintsUsed * 25, 25));
      setTimeout(() => {
        setShowSuccess(false);
        if (currentChallenge < challenges.length - 1) {
          setCurrentChallenge(currentChallenge + 1);
          setHintsUsed(0);
          setLocalProperties({});
        }
      }, 2000);
    } else {
      alert('Not quite right! Try again or use a hint.');
    }
  };

  const useHint = () => {
    setHintsUsed(hintsUsed + 1);
    const properties = Object.entries(challenge.targetProperties);
    const randomProperty = properties[Math.floor(Math.random() * properties.length)];
    alert(`Hint: Try setting ${randomProperty[0]} to "${randomProperty[1]}"`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Challenge Mode</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="font-medium">{score}</span>
          </div>
          <button
            onClick={useHint}
            className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
          >
            <Lightbulb className="h-4 w-4" />
            Hint
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-lg">
          <h3 className="font-medium text-teal-700 mb-2">{challenge.title}</h3>
          <p className="text-teal-600">{challenge.description}</p>
        </div>
        <button
          onClick={checkSolution}
          className="w-full py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-md hover:opacity-90 transition-opacity"
        >
          Check Solution
        </button>
      </div>
      
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-2xl font-bold text-teal-600 mb-2">🎉 Perfect!</h3>
            <p>You've completed the challenge!</p>
          </div>
        </div>
      )}
    </div>
  );
}