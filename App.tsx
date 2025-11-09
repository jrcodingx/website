
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLogin]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header 
        isLoggedIn={isLoggedIn} 
        onLoginClick={handleOpenLogin} 
        onLogout={handleLogout} 
      />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
      {showLogin && <LoginPage onClose={handleCloseLogin} onLogin={handleLogin} />}
    </div>
  );
};

export default App;
   