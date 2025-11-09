
import React from 'react';
import { MOCK_GAME_ARTICLES } from '../constants';
import PageHeader from './PageHeader';
import GameCard from './GameCard';
import type { GameArticle } from '../types';

const UpcomingPage: React.FC = () => {
  // Filter for games that have a future release date or are "Coming Soon"
  const upcomingGames = MOCK_GAME_ARTICLES.filter(game => 
    game.releaseDate === 'Coming Soon' || new Date(game.releaseDate) > new Date()
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Upcoming Releases"
        subtitle="Get hyped for the most anticipated games on the horizon."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {upcomingGames.map((article: GameArticle) => (
          <GameCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingPage;
