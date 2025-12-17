import { User, Progress, UserStats } from '../types';
import { QUESTIONS } from '../data/questions';

// Keys for LocalStorage
const USERS_KEY = 'infosec_users';
const PROGRESS_KEY = 'infosec_progress';
const SESSION_KEY = 'infosec_session';

export const db = {
  // --- User Management ---
  register: (username: string, password: string): User | null => {
    const usersStr = localStorage.getItem(USERS_KEY);
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];
    
    if (users.find(u => u.username === username)) {
      return null; // User exists
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      username,
      passwordHash: btoa(password), // Simple encoding for demo
      createdAt: Date.now()
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return newUser;
  },

  login: (username: string, password: string): User | null => {
    const usersStr = localStorage.getItem(USERS_KEY);
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];
    const user = users.find(u => u.username === username && u.passwordHash === btoa(password));
    return user || null;
  },

  getCurrentUser: (): User | null => {
    const sessionStr = localStorage.getItem(SESSION_KEY);
    return sessionStr ? JSON.parse(sessionStr) : null;
  },

  setCurrentUser: (user: User | null) => {
    if (user) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  },

  // --- Progress Management ---
  saveProgress: (userId: string, questionId: number, isCorrect: boolean, selectedOption: 'a'|'b'|'c'|'d') => {
    const progressStr = localStorage.getItem(PROGRESS_KEY);
    const allProgress: Progress[] = progressStr ? JSON.parse(progressStr) : [];
    
    // Remove previous attempt for this question by this user to ensure latest result
    const filtered = allProgress.filter(p => !(p.userId === userId && p.questionId === questionId));
    
    const newProgress: Progress = {
      userId,
      questionId,
      isCorrect,
      selectedOption,
      timestamp: Date.now()
    };

    filtered.push(newProgress);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(filtered));
  },

  getUserProgress: (userId: string): Progress[] => {
    const progressStr = localStorage.getItem(PROGRESS_KEY);
    const allProgress: Progress[] = progressStr ? JSON.parse(progressStr) : [];
    return allProgress.filter(p => p.userId === userId);
  },

  clearUserProgress: (userId: string) => {
    const progressStr = localStorage.getItem(PROGRESS_KEY);
    const allProgress: Progress[] = progressStr ? JSON.parse(progressStr) : [];
    const otherUsersProgress = allProgress.filter(p => p.userId !== userId);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(otherUsersProgress));
  },

  getStats: (userId: string): UserStats => {
    const userProgress = db.getUserProgress(userId);
    const totalAttempted = userProgress.length;
    const totalCorrect = userProgress.filter(p => p.isCorrect).length;
    
    return {
      totalAttempted,
      totalCorrect,
      accuracy: totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0,
      remaining: QUESTIONS.length - totalAttempted
    };
  }
};