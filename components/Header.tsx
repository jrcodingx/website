
import React from 'react';
import UserIcon from './icons/UserIcon';
import type { Page } from '../App';

interface HeaderProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onLogout: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => onNavigate(page)}
      className={`transition-colors duration-200 ${
        isActive ? 'text-white font-semibold' : 'text-text-secondary hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLoginClick, onLogout, currentPage, onNavigate }) => {
  return (
    <header className="bg-surface/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button onClick={() => onNavigate('home')} className="text-2xl font-black text-white tracking-wider">
              <span className="text-primary">GAME</span>HUB
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink page="news" currentPage={currentPage} onNavigate={onNavigate}>News</NavLink>
            <NavLink page="reviews" currentPage={currentPage} onNavigate={onNavigate}>Reviews</NavLink>
            <NavLink page="upcoming" currentPage={currentPage} onNavigate={onNavigate}>Upcoming</NavLink>
            <NavLink page="community" currentPage={currentPage} onNavigate={onNavigate}>Community</NavLink>
          </nav>
          <div className="flex items-center">
            {isLoggedIn ? (
              <div className="relative group">
                 <button className="flex items-center space-x-2 text-white bg-primary/20 hover:bg-primary/40 rounded-full p-2 transition-colors duration-300">
                    <UserIcon className="h-6 w-6" />
                 </button>
                 <div className="absolute right-0 mt-2 w-48 bg-surface rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <button onClick={() => onNavigate('profile')} className="block w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-gray-700 hover:text-white">Profile</button>
                    <a href="#" className="block px-4 py-2 text-sm text-text-secondary hover:bg-gray-700 hover:text-white">Settings</a>
                    <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300">
                      Logout
                    </button>
                 </div>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
