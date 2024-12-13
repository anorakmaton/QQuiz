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
}

export type Difficulty = 'adult' | 'children';