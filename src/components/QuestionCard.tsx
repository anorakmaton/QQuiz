import React from 'react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answerIndex: number) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800">{question.text}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full p-3 text-left rounded-lg bg-gray-50 hover:bg-blue-50 
                     transition-colors duration-200 border border-gray-200 
                     hover:border-blue-300 focus:outline-none focus:ring-2 
                     focus:ring-blue-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};