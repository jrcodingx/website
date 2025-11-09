
import React from 'react';
import type { GameArticle } from '../types';

interface GameCardProps {
  article: GameArticle;
}

const GameCard: React.FC<GameCardProps> = ({ article }) => {
  return (
    <div className="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-primary/30 transition-shadow duration-300 group transform hover:-translate-y-2">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={article.imageUrl} alt={article.title} />
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-2 py-1 m-2 rounded-full uppercase">
          {article.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-text-main mb-2 truncate group-hover:text-primary transition-colors duration-300">{article.title}</h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{article.description}</p>
        <div className="flex justify-between items-center text-xs text-text-secondary">
          <span>Release Date:</span>
          <span className="font-semibold text-text-main">{article.releaseDate}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
   