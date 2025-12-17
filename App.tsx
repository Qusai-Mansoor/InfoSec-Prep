import React, { useState, useEffect } from 'react';
import { User, Question, Progress } from './types';
import { db } from './services/db';
import { QUESTIONS } from './data/questions';

// --- Components ---

const Navbar: React.FC<{ user: User | null; onLogout: () => void; setView: (v: 'dashboard' | 'quiz') => void }> = ({ user, onLogout, setView }) => (
  <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="font-bold text-xl cursor-pointer flex items-center gap-2" onClick={() => user && setView('dashboard')}>
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        <span>InfoSec Prep</span>
      </div>
      {user && (
        <div className="flex items-center gap-4">
           <button onClick={() => setView('dashboard')} className="hover:text-blue-300 hidden sm:block font-medium">Dashboard</button>
           <button onClick={() => setView('quiz')} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-bold transition-colors shadow-sm">Practice</button>
           <button onClick={onLogout} className="text-slate-300 hover:text-white text-sm font-medium">Logout</button>
        </div>
      )}
    </div>
  </nav>
);

const AuthScreen: React.FC<{ onLogin: (u: User) => void }> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (isLogin) {
      const user = db.login(username, password);
      if (user) onLogin(user);
      else setError("Invalid credentials");
    } else {
      const user = db.register(username, password);
      if (user) onLogin(user);
      else setError("Username already exists");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-slate-200">
        <h2 className="text-3xl font-bold mb-6 text-center text-slate-800">{isLogin ? 'Welcome Back' : 'Create Profile'}</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white text-slate-900 placeholder-slate-400" 
              placeholder="Enter username" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white text-slate-900 placeholder-slate-400" 
              placeholder="Enter password" 
            />
          </div>
          {error && <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200 font-medium">{error}</p>}
          <button type="submit" className="w-full bg-blue-700 text-white p-3 rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-md">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-slate-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)} className="text-blue-700 hover:underline font-bold">
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC<{ user: User; onStart: () => void; onReset: () => void }> = ({ user, onStart, onReset }) => {
  // We use state for progress so the component re-renders and updates the list when reset happens
  const [stats, setStats] = useState(db.getStats(user.id));
  const [progress, setProgress] = useState(db.getUserProgress(user.id));

  // Show fewer items (3) as requested
  const recentActivity = [...progress].sort((a, b) => b.timestamp - a.timestamp).slice(0, 3);

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
      onReset();
      // Force refresh stats and progress list from DB after clear
      setStats(db.getStats(user.id));
      setProgress(db.getUserProgress(user.id));
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-5xl">
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Hello, {user.username}</h1>
          <p className="text-slate-600 mt-2 font-medium">Track your preparation progress.</p>
        </div>
        {stats.totalAttempted > 0 && (
          <button 
            onClick={handleReset} 
            className="text-red-600 hover:text-red-700 text-sm font-semibold hover:bg-red-50 px-3 py-2 rounded transition-colors"
          >
            Reset Progress
          </button>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Accuracy</div>
          <div className="text-4xl font-extrabold text-blue-700 mt-2">{stats.accuracy}%</div>
          <div className="mt-3 h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full transition-all duration-500" style={{ width: `${stats.accuracy}%` }}></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Completed</div>
          <div className="text-4xl font-extrabold text-slate-900 mt-2">{stats.totalAttempted} <span className="text-lg text-slate-400 font-normal">/ {QUESTIONS.length}</span></div>
          <div className="mt-3 h-2.5 bg-slate-100 rounded-full overflow-hidden">
             <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${(stats.totalAttempted / QUESTIONS.length) * 100}%` }}></div>
          </div>
        </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Remaining</div>
          <div className="text-4xl font-extrabold text-slate-900 mt-2">{stats.remaining}</div>
          <p className="text-xs text-slate-500 mt-2 font-medium">Questions left to practice</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
           <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
             <h3 className="font-bold text-slate-800">Recent Activity</h3>
           </div>
           {recentActivity.length === 0 ? (
             <div className="p-8 text-center text-slate-500 font-medium">No activity yet. Start practicing!</div>
           ) : (
             <div className="divide-y divide-slate-100">
               {recentActivity.map((p, idx) => {
                 const q = QUESTIONS.find(q => q.id === p.questionId);
                 return (
                   <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className={`w-3 h-3 rounded-full flex-shrink-0 ${p.isCorrect ? 'bg-emerald-500' : 'bg-red-500'}`} title={p.isCorrect ? 'Correct' : 'Incorrect'}></div>
                        <div className="truncate text-sm text-slate-700 font-semibold">Q{p.questionId}: {q?.question.substring(0, 40)}...</div>
                      </div>
                      <span className="text-xs text-slate-500 flex-shrink-0 font-medium">{new Date(p.timestamp).toLocaleDateString()}</span>
                   </div>
                 );
               })}
             </div>
           )}
        </div>

        <div className="bg-slate-900 rounded-xl shadow-lg p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">Ready to continue?</h3>
              <p className="text-slate-300 mb-6 font-medium leading-relaxed">
                {stats.remaining === 0 
                  ? "You have attempted all questions! You can review or reset your progress." 
                  : `Pick up where you left off. Master the remaining ${stats.remaining} questions.`}
              </p>
              <button onClick={onStart} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-bold transition-all w-full md:w-auto shadow-lg shadow-blue-900/50 border border-blue-500">
                {stats.totalAttempted === 0 ? "Start Quiz" : "Continue Quiz"}
              </button>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-600 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

const Quiz: React.FC<{ user: User; onComplete: () => void }> = ({ user, onComplete }) => {
  // Logic to calculate initial index: Strictly find the first question ID that has NOT been attempted at all.
  const getInitialIndex = () => {
    const progress = db.getUserProgress(user.id);
    const attemptedIds = new Set(progress.map(p => p.questionId));
    
    // Find the first question in the list that isn't in the attempted set
    const firstUnattemptedIndex = QUESTIONS.findIndex(q => !attemptedIds.has(q.id));
    
    // If all questions are attempted, start from beginning (or 0), otherwise start at the gap
    return firstUnattemptedIndex >= 0 ? firstUnattemptedIndex : 0;
  };

  const [currentIndex, setCurrentIndex] = useState(getInitialIndex());
  const [selectedOption, setSelectedOption] = useState<'a'|'b'|'c'|'d' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // When view changes or component remounts, ensure we verify index again if needed, 
  // but useState(getInitialIndex()) handles the initial mount correctly.

  const question = QUESTIONS[currentIndex];

  const handleOptionSelect = (opt: 'a'|'b'|'c'|'d') => {
    if (isSubmitted) return;
    setSelectedOption(opt);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
    const isCorrect = selectedOption === question.correctOption;
    db.saveProgress(user.id, question.id, isCorrect, selectedOption);
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    }
  };

  // Helper for option styling with higher contrast colors
  const getOptionStyle = (optKey: 'a'|'b'|'c'|'d') => {
    const base = "w-full p-4 rounded-lg border-2 text-left transition-all relative outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 ";
    
    if (!isSubmitted) {
      if (selectedOption === optKey) {
        return base + "border-blue-600 bg-blue-100 text-blue-900 font-medium shadow-sm";
      }
      return base + "border-slate-300 bg-white hover:border-blue-400 hover:bg-slate-50 text-slate-800";
    }
    
    // Submitted state
    if (optKey === question.correctOption) {
      return base + "border-emerald-600 bg-emerald-100 text-emerald-900 font-bold shadow-sm";
    }
    if (selectedOption === optKey && optKey !== question.correctOption) {
      return base + "border-red-600 bg-red-100 text-red-900 font-medium";
    }
    return base + "border-slate-200 bg-slate-50 text-slate-400 opacity-70";
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl min-h-[calc(100vh-80px)] flex flex-col justify-center">
      
      {/* Progress Header */}
      <div className="mb-6 flex justify-between items-center text-sm font-semibold text-slate-600">
        <span>Question {currentIndex + 1} of {QUESTIONS.length}</span>
        <span className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-xs uppercase tracking-wide">{question.category || "General"}</span>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-8">
           <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-8">
             {question.question}
           </h2>
           
           <div className="space-y-3">
             {(['a', 'b', 'c', 'd'] as const).map((optKey) => (
               <button 
                 key={optKey}
                 onClick={() => handleOptionSelect(optKey)}
                 className={getOptionStyle(optKey)}
                 disabled={isSubmitted}
               >
                 <span className="uppercase font-extrabold mr-3 opacity-70">{optKey}</span>
                 {question.options[optKey]}
                 
                 {isSubmitted && optKey === question.correctOption && (
                   <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-700">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                   </div>
                 )}
                 {isSubmitted && selectedOption === optKey && optKey !== question.correctOption && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                 )}
               </button>
             ))}
           </div>
        </div>

        {/* Feedback Section */}
        {isSubmitted && (
          <div className="bg-slate-50 border-t border-slate-200 p-6 md:p-8 animate-fade-in">
             <div className="flex items-start gap-4">
               <div className="bg-blue-100 p-2 rounded-full text-blue-700 mt-1 flex-shrink-0">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <div>
                 <h4 className="font-bold text-slate-900 mb-2 text-lg">Justification</h4>
                 <p className="text-slate-700 leading-relaxed text-base">{question.justification}</p>
               </div>
             </div>
          </div>
        )}
        
        {/* Footer Controls */}
        <div className="bg-white p-4 border-t border-slate-100 flex justify-between items-center sticky bottom-0">
           <button 
             onClick={handlePrev} 
             disabled={currentIndex === 0}
             className={`text-slate-600 font-bold px-4 py-2 hover:bg-slate-100 rounded-lg transition-colors ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
           >
             Previous
           </button>

           {!isSubmitted ? (
             <button 
               onClick={handleSubmit} 
               disabled={!selectedOption}
               className={`bg-slate-900 text-white px-8 py-3 rounded-lg font-bold transition-all ${!selectedOption ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-800 shadow-md transform active:scale-95'}`}
             >
               Submit Answer
             </button>
           ) : (
            <button 
              onClick={handleNext} 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-md flex items-center gap-2 transform active:scale-95"
            >
              {currentIndex === QUESTIONS.length - 1 ? 'Finish' : 'Next Question'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
           )}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [view, setView] = useState<'dashboard' | 'quiz'>('dashboard');

  useEffect(() => {
    const cachedUser = db.getCurrentUser();
    if (cachedUser) setUser(cachedUser);
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    db.setCurrentUser(u);
    setView('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    db.setCurrentUser(null);
  };
  
  const handleReset = () => {
    if (user) {
      db.clearUserProgress(user.id);
    }
  };

  if (!user) {
    return <AuthScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar user={user} onLogout={handleLogout} setView={setView} />
      <main>
        {view === 'dashboard' && <Dashboard user={user} onStart={() => setView('quiz')} onReset={handleReset} />}
        {view === 'quiz' && <Quiz user={user} onComplete={() => setView('dashboard')} />}
      </main>
    </div>
  );
}