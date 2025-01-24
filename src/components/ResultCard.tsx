import React, { useRef, useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import Confetti from 'react-confetti';

interface ResultCardProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ score, total, onRestart }) => {
  const percentage = (score / total) * 100;
  const isHighScore = score >= 4;
  const confettiRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (confettiRef.current) {
      setDimensions({
        width: confettiRef.current.offsetWidth,
        height: confettiRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div ref={confettiRef} className="relative bg-white p-8 rounded-lg shadow-lg text-center max-w-xl w-full">
      {isHighScore && (
        <Confetti
          width={dimensions.width}
          height={window.innerHeight}
        />
      )}
      <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
      <h2 className="text-2xl font-bold mb-4">クイズ完了！</h2>
      <p className="text-xl mb-4">
        スコア: {score} / {total} ({percentage}%)
      </p>
      {isHighScore ? (
        <img
          src="image/goukaku.png"
          alt="高得点の画像"
          className="w-3/4 h-auto mb-4 rounded-lg mx-auto"
        />
      ) : (
        <img
          src="image/mousukosi.jpeg"
          alt="低得点の画像"
          className="w-3/4 h-auto mb-4 rounded-lg mx-auto"
        />
      )}
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