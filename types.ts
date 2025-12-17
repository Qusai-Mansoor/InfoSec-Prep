export interface Question {
  id: number;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctOption: 'a' | 'b' | 'c' | 'd';
  justification: string;
  category?: string;
}

export interface User {
  id: string;
  username: string;
  passwordHash: string; // Simple storage for demo
  createdAt: number;
}

export interface Progress {
  userId: string;
  questionId: number;
  isCorrect: boolean;
  selectedOption: 'a' | 'b' | 'c' | 'd';
  timestamp: number;
}

export interface UserStats {
  totalAttempted: number;
  totalCorrect: number;
  accuracy: number;
  remaining: number;
}