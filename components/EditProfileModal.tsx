
import React, { useState } from 'react';
import CloseIcon from './icons/CloseIcon';
import type { User } from '../types';

interface EditProfileModalProps {
  user: User;
  onClose: () => void;
  onSave: (updatedUser: User) => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    username: user.username,
    bio: user.bio || '',
    avatarUrl: user.avatarUrl,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...user,
      ...formData,
    });
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-surface rounded-lg shadow-xl w-full max-w-lg mx-auto relative transform transition-all duration-300 ease-in-out scale-95 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Edit Profile</h2>
          <button 
            onClick={onClose} 
            className="text-text-secondary hover:text-white transition-colors"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input 
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-background text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary" 
              id="username" 
              name="username"
              type="text" 
              value={formData.username}
              onChange={handleChange}
              placeholder="Your username" 
              required 
            />
          </div>
          <div>
            <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea 
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-background text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none" 
              id="bio" 
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us a little about yourself" 
            />
          </div>
          <div>
            <label className="block text-text-secondary text-sm font-bold mb-2" htmlFor="avatarUrl">
              Avatar URL
            </label>
            <input 
              className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 bg-background text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary" 
              id="avatarUrl" 
              name="avatarUrl"
              type="text" 
              value={formData.avatarUrl}
              onChange={handleChange}
              placeholder="https://example.com/avatar.png" 
              required 
            />
          </div>
          <div className="flex items-center justify-end pt-4 space-x-4">
            <button 
              type="button"
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EditProfileModal;