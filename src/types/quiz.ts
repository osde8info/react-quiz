export interface QuizOption {
  id: string;
  label: string;
  helper?: string;
}

export interface QuizQuestion {
  id: string;
  category: string;
  prompt: string;
  explanation: string;
  options: QuizOption[];
  correctOptionId: string;
}

export type QuizStatus = 'idle' | 'active' | 'complete';
