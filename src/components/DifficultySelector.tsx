import React from 'react';
import { Brain, Users } from 'lucide-react';
import { Difficulty } from '../types/quiz';

interface DifficultySelectorProps {
  onSelect: (difficulty: Difficulty) => void;
}

export const DifficultySelector: React.FC<DifficultySelectorProps> = ({ onSelect }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
      <h2 className="text-2xl font-bold text-center mb-6">難易度を選んでください</h2>
      <div className="space-y-4">
        <button
          onClick={() => onSelect('children')}
          className="w-full p-6 flex items-center justify-center space-x-4 rounded-lg
                   bg-green-50 hover:bg-green-100 border-2 border-green-200
                   transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <Users className="w-8 h-8 text-green-600" />
          <div className="text-left">
            <h3 className="text-xl font-semibold text-green-700">こども向け</h3>
            <p className="text-green-600">やさしい問題に挑戦！</p>
          </div>
        </button>

        <button
          onClick={() => onSelect('adult')}
          className="w-full p-6 flex items-center justify-center space-x-4 rounded-lg
                   bg-blue-50 hover:bg-blue-100 border-2 border-blue-200
                   transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <Brain className="w-8 h-8 text-blue-600" />
          <div className="text-left">
            <h3 className="text-xl font-semibold text-blue-700">おとな向け</h3>
            <p className="text-blue-600">むずかしい問題に挑戦！</p>
          </div>
        </button>
      </div>
    </div>
  );
};