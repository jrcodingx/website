
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import NewsPage from './components/NewsPage';
import ReviewsPage from './components/ReviewsPage';
import UpcomingPage from './components/UpcomingPage';
import CommunityPage from './components/CommunityPage';
import ProfilePage from './components/ProfilePage';

export type Page = 'home' | 'news' | 'reviews' | 'upcoming' | 'community' | 'profile';

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
    setCurrentPage('home'); // Redirect to home on logout
  };

  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };
  
  const navigate = (page: Page) => {
    // Prevent accessing profile page if not logged in
    if (page === 'profile' && !isLoggedIn) {
      setShowLogin(true);
    } else {
      setCurrentPage(page);
    }
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
      case 'profile':
        return <ProfilePage />;
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
        onNavigate={navigate}
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
