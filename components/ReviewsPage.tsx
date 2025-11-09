
import React, { useState, useEffect } from 'react';
import PageHeader from './PageHeader';
import ReviewCard from './ReviewCard';
import * as api from '../api';
import type { Review } from '../types';


const ReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const allReviews = await api.getReviews();
        setReviews(allReviews);
      } catch (err) {
        setError('Failed to load reviews. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Critical Reviews"
        subtitle="In-depth analysis and scores for the latest and greatest games."
      />
       {loading && <p className="text-center text-text-secondary">Loading reviews...</p>}
       {error && <p className="text-center text-red-400">{error}</p>}
       {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
       )}
    </div>
  );
};

export default ReviewsPage;
