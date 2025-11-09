
import React, { useState } from 'react';
import CloseIcon from './icons/CloseIcon';
import * as api from '../api';
import type { User } from '../types';

interface LoginPageProps {
  onClose: () => void;
  onLogin: (user: User) => void;
}

type FormMode = 'login' | 'signup';

const LoginPage: React.FC<LoginPageProps> = ({ onClose, onLogin }) => {
  const [mode, setMode] = useState<FormMode>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      let user: User;
      if (mode === 'login') {
        user = await api.login(email, password);
      } else {
        user = await api.register(username, email, password);
      }
      onLogin(user);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-surface rounded-lg shadow-xl w-full max-w-md mx-auto relative transform transition-all duration-300 ease-in-out scale-95 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors"
          aria-label="Close login modal"
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="flex border-b border-gray-700 mb-6">
            <button 
              onClick={() => { setMode('login'); setError(null); }}
              className={`py-2 px-4 text-lg font-semibold w-1/2 transition-colors ${mode === 'login' ? 'text-primary border-b-2 border-primary' : 'text-text-secondary'}`}
            >
              Login
            </button>
            <button 
              onClick={() => { setMode('signup'); setError(null); }}
              className={`py-2 px-4 text-lg font-semibold w-1/2 transition-colors ${mode === 'signup' ? 'text-primary border-b-2 border-primary' : 'text-text-secondary'}`}
            >
              Sign Up
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-md relative mb-4 text-center" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            {mode === 'signup' && (
              <div className="mb-4">
                <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input 
                  className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-background text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary" 
                  id="username" 
                  type="text" 
                  placeholder="Username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required 
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input 
                className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-background text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary" 
                id="email" 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="mb-6">
              <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input 
                className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-background text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary" 
                id="password" 
                type="password" 
                placeholder="******************" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              {mode === 'login' && <p className="text-xs text-text-secondary mt-2">Hint: Use 'password123' to log in.</p>}
            </div>
            <div className="flex items-center justify-between">
              <button 
                className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-lg disabled:bg-primary/50 disabled:cursor-not-allowed flex justify-center items-center" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  mode === 'login' ? 'Sign In' : 'Create Account'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
