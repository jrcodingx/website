
import React from 'react';
import type { Review } from '../types';
import StarIcon from './icons/StarIcon';

interface ReviewCardProps {
  review: Review;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        />
      ))}
    </div>
  );
};

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-primary/30 transition-shadow duration-300 group transform hover:-translate-y-2 flex flex-col md:flex-row">
      <img className="w-full md:w-1/3 h-64 md:h-auto object-cover" src={review.imageUrl} alt={review.gameTitle} />
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-text-main mb-2 group-hover:text-primary transition-colors duration-300">{review.gameTitle}</h3>
          <div className="flex items-center space-x-4 mb-4">
            <StarRating rating={review.rating} />
            <span className="text-2xl font-black text-primary">{review.score.toFixed(1)}</span>
          </div>
          <p className="text-text-secondary text-base line-clamp-4">{review.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
