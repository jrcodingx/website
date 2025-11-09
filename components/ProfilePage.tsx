
import React from 'react';
import { MOCK_USER } from '../constants';
import GameCard from './GameCard';
import CalendarIcon from './icons/CalendarIcon';
import PageHeader from './PageHeader';

const ProfilePage: React.FC = () => {
  const user = MOCK_USER;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="My Profile"
        subtitle={`Welcome back, ${user.username}! Here's your corner of GameHub.`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - User Info */}
        <div className="lg:col-span-1 bg-surface rounded-lg shadow-lg p-6 flex flex-col items-center text-center h-fit">
          <img
            src={user.avatarUrl}
            alt={user.username}
            className="w-32 h-32 rounded-full border-4 border-primary mb-4"
          />
          <h2 className="text-3xl font-bold text-white">{user.username}</h2>
          <div className="flex items-center text-text-secondary mt-2">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span>Joined on {new Date(user.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          
          <div className="w-full border-t border-gray-700 my-6"></div>

          <div className="flex justify-around w-full text-center">
            <div>
              <p className="text-2xl font-bold text-primary">{user.stats.reviews}</p>
              <p className="text-sm text-text-secondary">Games Reviewed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{user.stats.posts}</p>
              <p className="text-sm text-text-secondary">Community Posts</p>
            </div>
          </div>
        </div>

        {/* Right Column - Favorite Games */}
        <div className="lg:col-span-2">
          <h3 className="text-3xl font-bold mb-6 text-white border-l-4 border-primary pl-4">Favorite Games</h3>
          {user.favoriteGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {user.favoriteGames.map((game) => (
                <GameCard key={game.id} article={game} />
              ))}
            </div>
          ) : (
            <div className="bg-surface rounded-lg p-8 text-center text-text-secondary">
              <p>You haven't marked any games as favorites yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
