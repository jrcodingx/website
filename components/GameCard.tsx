
import React from 'react';
import type { GameArticle, UserProfile } from '../types';
import HeartIcon from './icons/HeartIcon';

interface GameCardProps {
  article: GameArticle;
  user: UserProfile | null;
  onToggleFavorite: (gameId: number) => void;
}

const GameCard: React.FC<GameCardProps> = ({ article, user, onToggleFavorite }) => {
  const isFavorite = user?.favoriteGameIds.includes(article.id) || false;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent card navigation if any
    e.stopPropagation();
    onToggleFavorite(article.id);
  };

  return (
    <div className="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-primary/30 transition-shadow duration-300 group transform hover:-translate-y-2">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={article.imageUrl} alt={article.title} />
        <div className="absolute top-0 right-0 m-2 flex items-center space-x-2">
          {user && (
             <button
              onClick={handleFavoriteClick}
              className={`p-2 rounded-full transition-all duration-300 ${
                isFavorite 
                  ? 'bg-pink-500 text-white scale-110' 
                  : 'bg-black/50 text-white opacity-0 group-hover:opacity-100 hover:bg-pink-500/80'
              }`}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <HeartIcon className="w-5 h-5" isFilled={isFavorite} />
            </button>
          )}
          <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full uppercase">
            {article.category}
          </div>
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