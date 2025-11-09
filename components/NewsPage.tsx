
import React from 'react';
import { MOCK_NEWS_ARTICLES } from '../constants';
import PageHeader from './PageHeader';
import type { NewsArticle } from '../types';

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <div className="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-primary/30 transition-shadow duration-300 group transform hover:-translate-y-2">
    <div className="relative">
      <img className="w-full h-48 object-cover" src={article.imageUrl} alt={article.title} />
      <div className={`absolute top-0 right-0 text-white text-xs font-bold px-2 py-1 m-2 rounded-full uppercase ${
        article.category === 'Update' ? 'bg-blue-500' :
        article.category === 'Esports' ? 'bg-red-500' : 'bg-green-500'
      }`}>
        {article.category}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold text-text-main mb-2 truncate group-hover:text-primary transition-colors duration-300">{article.title}</h3>
      <p className="text-text-secondary text-sm mb-4 line-clamp-3">{article.excerpt}</p>
      <div className="flex justify-between items-center text-xs text-text-secondary">
        <span>By {article.author}</span>
        <span className="font-semibold text-text-main">{article.date}</span>
      </div>
    </div>
  </div>
);

const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Game News & Updates"
        subtitle="Stay ahead of the curve with the latest happenings in the gaming world."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {MOCK_NEWS_ARTICLES.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
