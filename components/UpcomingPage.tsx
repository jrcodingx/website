
import React, { useState, useEffect } from 'react';
import PageHeader from './PageHeader';
import GameCard from './GameCard';
import type { GameArticle, UserProfile } from '../types';
import * as api from '../api';

// FIX: Add props to allow user interaction
interface UpcomingPageProps {
  user: UserProfile | null;
  onUserUpdate: (updatedUser: UserProfile) => void;
}

const UpcomingPage: React.FC<UpcomingPageProps> = ({ user, onUserUpdate }) => {
  const [upcomingGames, setUpcomingGames] = useState<GameArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUpcoming = async () => {
      try {
        setLoading(true);
        const games = await api.getUpcomingGames();
        setUpcomingGames(games);
      } catch (err) {
        setError('Failed to load upcoming games. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUpcoming();
  }, []);

  // FIX: Add handler for toggling favorites, consistent with other pages
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
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Upcoming Releases"
        subtitle="Get hyped for the most anticipated games on the horizon."
      />
      {loading && <p className="text-center text-text-secondary">Loading upcoming games...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}
      {!loading && !error && upcomingGames.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {upcomingGames.map((article: GameArticle) => (
            // FIX: Pass required props to GameCard
            <GameCard 
              key={article.id} 
              article={article} 
              user={user}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>
      ) : (
        !loading && <p className="text-center text-text-secondary">No upcoming games found at the moment.</p>
      )}
    </div>
  );
};

export default UpcomingPage;
