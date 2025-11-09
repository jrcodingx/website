
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-gray-700 mt-16">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-secondary">&copy; {new Date().getFullYear()} GameHub Info. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">Discord</a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">Twitch</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
   