import React from 'react';
import { Question } from '../types/quiz';
import { CheckCircle, XCircle } from 'lucide-react';

interface ExplanationCardProps {
  question: Question;
  selectedAnswer: number;
  onContinue: () => void;
}

export const ExplanationCard: React.FC<ExplanationCardProps> = ({
  question,
  selectedAnswer,
  onContinue,
}) => {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
      <div className="flex items-center mb-4">
        {isCorrect ? (
          <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
        ) : (
          <XCircle className="w-6 h-6 text-red-500 mr-2" />
        )}
        <h3 className="text-xl font-bold">
          {isCorrect ? '正解！' : '不正解'}
        </h3>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-700 mb-2">正解: {question.options[question.correctAnswer]}</p>
        <p className="text-gray-600 mb-4">{question.explanation}</p>
        {question.explanationImage && (
          <div className="relative mb-4">
            <img
              src={question.explanationImage}
              alt="説明画像"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </div>

      <button
        onClick={onContinue}
        className="w-full p-3 text-center rounded-lg bg-blue-600 text-white
                 hover:bg-blue-700 transition-colors duration-200
                 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        次の問題へ
      </button>
    </div>
  );
};