import { useState } from 'react';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { ResultCard } from './components/ResultCard';
import { ExplanationCard } from './components/ExplanationCard';
import { getAdultQuestions, getDemoQuestions } from './data/questions';
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

  const handleStart = async (difficulty: 'adult' | 'demo') => {
    const questions = difficulty === 'adult'
      ? await getAdultQuestions()
      : await getDemoQuestions();
    const selectedQuestions = difficulty === 'adult'
      ? getRandomQuestions(questions, 5)
      : questions.slice(0, 5); // demoの場合は順番に出題
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      showResult: false,
      showExplanation: false,
      difficulty,
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
          <div className="space-y-4">
            <button
              onClick={() => handleStart('adult')}
              className="w-full p-6 flex items-center justify-center space-x-4 rounded-lg
                       bg-blue-50 hover:bg-blue-100 border-2 border-blue-200
                       transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <Brain className="w-8 h-8 text-blue-600" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-blue-700">スタート</h3>
              </div>
            </button>
            <button
              onClick={() => handleStart('demo')}
              className="w-full p-6 flex items-center justify-center space-x-4 rounded-lg
                       bg-green-50 hover:bg-green-100 border-2 border-green-200
                       transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <Brain className="w-8 h-8 text-green-600" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-green-700">デモ</h3>
              </div>
            </button>
          </div>
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