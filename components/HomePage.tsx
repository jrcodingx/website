
import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import type { GameArticle, UserProfile } from '../types';
import * as api from '../api';
import HeartIcon from './icons/HeartIcon';

interface HomePageProps {
  user: UserProfile | null;
  onUserUpdate: (updatedUser: UserProfile) => void;
}

const HomePage: React.FC<HomePageProps> = ({ user, onUserUpdate }) => {
  const [games, setGames] = useState<GameArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const allGames = await api.getGames();
        setGames(allGames);
      } catch (err) {
        setError('Failed to load games. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  const handleToggleFavorite = async (gameId: number) => {
    if (!user) return;
    try {
      const isCurrentlyFavorite = user.favoriteGameIds.includes(gameId);
      const updatedUser = isCurrentlyFavorite
        ? await api.removeFavorite(user.id, gameId)
        : await api.addFavorite(user.id, gameId);
      onUserUpdate(updatedUser);
    } catch (error) {
      console.error("Failed to toggle favorite", error);
      // Optionally show an error to the user
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center h-[50vh] flex items-center justify-center">
        <p className="text-text-secondary text-xl">Loading awesome games...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center h-[50vh] flex items-center justify-center">
        <p className="text-red-400 text-xl">{error}</p>
      </div>
    );
  }

  const featuredGame = games[0];
  const otherGames = games.slice(1);

  if (!featuredGame) {
    return (
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center h-[50vh] flex items-center justify-center">
        <p className="text-text-secondary text-xl">No games found.</p>
      </div>
    );
  }
  
  const isFeaturedFavorite = user?.favoriteGameIds.includes(featuredGame.id) || false;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-12 rounded-lg overflow-hidden relative h-[500px] flex items-end p-8 bg-black shadow-2xl shadow-black/50">
        <img src={featuredGame.imageUrl} alt={featuredGame.title} className="absolute top-0 left-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 text-white max-w-2xl">
          <span className="bg-primary text-white px-3 py-1 text-sm font-bold rounded-full uppercase tracking-wider">{featuredGame.category}</span>
          <h1 className="text-4xl md:text-6xl font-black my-4 leading-tight tracking-tighter">{featuredGame.title}</h1>
          <p className="text-lg text-text-secondary mb-6">{featuredGame.description}</p>
          <div className="flex items-center space-x-4">
            <button className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </button>
            {user && (
              <button
                onClick={() => handleToggleFavorite(featuredGame.id)}
                className={`p-3 rounded-full transition-colors duration-300 ${
                  isFeaturedFavorite ? 'bg-pink-500/80 hover:bg-pink-500' : 'bg-surface/80 hover:bg-surface'
                }`}
                aria-label={isFeaturedFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <HeartIcon className={`w-6 h-6 ${isFeaturedFavorite ? 'text-white' : 'text-text-secondary'}`} isFilled={isFeaturedFavorite} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-primary pl-4">Discover Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {otherGames.map((article: GameArticle) => (
            <GameCard
              key={article.id}
              article={article}
              user={user}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;