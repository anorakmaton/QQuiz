import React from 'react';
import { Trophy } from 'lucide-react';

interface ResultCardProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ score, total, onRestart }) => {
  const percentage = (score / total) * 100;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-xl w-full">
      <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
      <h2 className="text-2xl font-bold mb-4">クイズ完了！</h2>
      <p className="text-xl mb-4">
        スコア: {score} / {total} ({percentage}%)
      </p>
      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg
                 hover:bg-blue-700 transition-colors duration-200
                 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        もう一度チャレンジ
      </button>
    </div>
  );
};