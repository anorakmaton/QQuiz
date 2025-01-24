import React, { useState } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { ResultCard } from './components/ResultCard';
import { ExplanationCard } from './components/ExplanationCard';
import { adultQuestions } from './data/questions';
import { Question, QuizState } from './types/quiz';
import { Brain } from 'lucide-react';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showResult: false,
    showExplanation: false,
    difficulty: null,
    questions: [],
  });
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);

  const getRandomQuestions = (questions: Question[], count: number): Question[] => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleStart = () => {
    const selectedQuestions = getRandomQuestions(adultQuestions, 5);
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      showResult: false,
      showExplanation: false,
      difficulty: 'adult',
      questions: selectedQuestions,
    });
  };

  const handleAnswer = (answerIndex: number) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    setSelectedAnswer(answerIndex);
    setQuizState((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      showExplanation: true,
    }));
  };

  const handleContinue = () => {
    const isLastQuestion = quizState.currentQuestionIndex === quizState.questions.length - 1;
    
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
      questions: [],
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
          <button
            onClick={handleStart}
            className="w-full p-6 flex items-center justify-center space-x-4 rounded-lg
                     bg-blue-50 hover:bg-blue-100 border-2 border-blue-200
                     transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <Brain className="w-8 h-8 text-blue-600" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-blue-700">スタート</h3>
            </div>
          </button>
        ) : !quizState.showResult ? (
          <>
            <ProgressBar
              current={quizState.currentQuestionIndex + 1}
              total={quizState.questions.length}
            />
            {!quizState.showExplanation ? (
              <QuestionCard
                question={quizState.questions[quizState.currentQuestionIndex]}
                onAnswer={handleAnswer}
              />
            ) : (
              <ExplanationCard
                question={quizState.questions[quizState.currentQuestionIndex]}
                selectedAnswer={selectedAnswer}
                onContinue={handleContinue}
              />
            )}
          </>
        ) : (
          <ResultCard
            score={quizState.score}
            total={quizState.questions.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;