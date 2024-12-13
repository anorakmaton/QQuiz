import React, { useState } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { ResultCard } from './components/ResultCard';
import { ExplanationCard } from './components/ExplanationCard';
import { DifficultySelector } from './components/DifficultySelector';
import { adultQuestions, childrenQuestions } from './data/questions';
import { QuizState, Difficulty } from './types/quiz';
import { Brain } from 'lucide-react';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showResult: false,
    showExplanation: false,
    difficulty: null,
  });
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);

  const questions = quizState.difficulty === 'adult' ? adultQuestions : childrenQuestions;

  const handleDifficultySelect = (difficulty: Difficulty) => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      showResult: false,
      showExplanation: false,
      difficulty,
    });
  };

  const handleAnswer = (answerIndex: number) => {
    const currentQuestion = questions[quizState.currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    setSelectedAnswer(answerIndex);
    setQuizState((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      showExplanation: true,
    }));
  };

  const handleContinue = () => {
    const isLastQuestion = quizState.currentQuestionIndex === questions.length - 1;
    
    setQuizState((prev) => ({
      ...prev,
      currentQuestionIndex: prev.currentQuestionIndex + 1,
      showResult: isLastQuestion,
      showExplanation: false,
    }));
    setSelectedAnswer(-1);
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      showResult: false,
      showExplanation: false,
      difficulty: null,
    });
    setSelectedAnswer(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="max-w-xl w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <Brain className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">予防救急クイズ</h1>
          <p className="text-gray-600">予防救急に関するクイズを解いて予防救急の知識を身に着けよう！</p>
        </div>

        {!quizState.difficulty ? (
          <DifficultySelector onSelect={handleDifficultySelect} />
        ) : !quizState.showResult ? (
          <>
            <ProgressBar
              current={quizState.currentQuestionIndex + 1}
              total={questions.length}
            />
            {!quizState.showExplanation ? (
              <QuestionCard
                question={questions[quizState.currentQuestionIndex]}
                onAnswer={handleAnswer}
              />
            ) : (
              <ExplanationCard
                question={questions[quizState.currentQuestionIndex]}
                selectedAnswer={selectedAnswer}
                onContinue={handleContinue}
              />
            )}
          </>
        ) : (
          <ResultCard
            score={quizState.score}
            total={questions.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;