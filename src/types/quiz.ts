export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  explanationImage?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showResult: boolean;
  showExplanation: boolean;
  difficulty: string | null;
  questions: Question[]; // 追加
}

export type Difficulty = 'adult' | 'children';