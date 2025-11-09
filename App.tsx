
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import NewsPage from './components/NewsPage';
import ReviewsPage from './components/ReviewsPage';
import UpcomingPage from './components/UpcomingPage';
import CommunityPage from './components/CommunityPage';

export type Page = 'home' | 'news' | 'reviews' | 'upcoming' | 'community';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

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

  const renderPage = () => {
    switch (currentPage) {
      case 'news':
        return <NewsPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'upcoming':
        return <UpcomingPage />;
      case 'community':
        return <CommunityPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header 
        isLoggedIn={isLoggedIn} 
        onLoginClick={handleOpenLogin} 
        onLogout={handleLogout}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      {showLogin && <LoginPage onClose={handleCloseLogin} onLogin={handleLogin} />}
    </div>
  );
};

export default App;
