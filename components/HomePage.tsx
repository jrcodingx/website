
import React from 'react';
import { MOCK_GAME_ARTICLES } from '../constants';
import GameCard from './GameCard';
import type { GameArticle } from '../types';

const HomePage: React.FC = () => {
  const featuredGame = MOCK_GAME_ARTICLES[0];
  const otherGames = MOCK_GAME_ARTICLES.slice(1);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="mb-12 rounded-lg overflow-hidden relative h-[500px] flex items-end p-8 bg-black shadow-2xl shadow-black/50">
        <img src={featuredGame.imageUrl} alt={featuredGame.title} className="absolute top-0 left-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 text-white max-w-2xl">
          <span className="bg-primary text-white px-3 py-1 text-sm font-bold rounded-full uppercase tracking-wider">{featuredGame.category}</span>
          <h1 className="text-4xl md:text-6xl font-black my-4 leading-tight tracking-tighter">{featuredGame.title}</h1>
          <p className="text-lg text-text-secondary mb-6">{featuredGame.description}</p>
          <button className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Learn More
          </button>
        </div>
      </section>

      {/* Latest News Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-primary pl-4">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {otherGames.map((article: GameArticle) => (
            <GameCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
   