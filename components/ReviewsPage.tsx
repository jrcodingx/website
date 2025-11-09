
import React from 'react';
import { MOCK_REVIEWS } from '../constants';
import PageHeader from './PageHeader';
import ReviewCard from './ReviewCard';

const ReviewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Critical Reviews"
        subtitle="In-depth analysis and scores for the latest and greatest games."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {MOCK_REVIEWS.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
