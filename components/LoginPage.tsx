
import React, { useState } from 'react';
import CloseIcon from './icons/CloseIcon';

interface LoginPageProps {
  onClose: () => void;
  onLogin: () => void;
}

type FormMode = 'login' | 'signup';

const LoginPage: React.FC<LoginPageProps> = ({ onClose, onLogin }) => {
  const [mode, setMode] = useState<FormMode>('login');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form validation and API calls
    onLogin();
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
        >
          <CloseIcon className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="flex border-b border-gray-700 mb-6">
            <button 
              onClick={() => setMode('login')} 
              className={`py-2 px-4 text-lg font-semibold w-1/2 transition-colors ${mode === 'login' ? 'text-primary border-b-2 border-primary' : 'text-text-secondary'}`}
            >
              Login
            </button>
            <button 
              onClick={() => setMode('signup')} 
              className={`py-2 px-4 text-lg font-semibold w-1/2 transition-colors ${mode === 'signup' ? 'text-primary border-b-2 border-primary' : 'text-text-secondary'}`}
            >
              Sign Up
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            {mode === 'signup' && (
              <div className="mb-4">
                <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-background text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary" id="username" type="text" placeholder="Username" required />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-background text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary" id="email" type="email" placeholder="Email" required />
            </div>
            <div className="mb-6">
              <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-background text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary" id="password" type="password" placeholder="******************" required />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-lg" type="submit">
                {mode === 'login' ? 'Sign In' : 'Create Account'}
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
   