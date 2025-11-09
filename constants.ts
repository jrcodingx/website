
import type { GameArticle, NewsArticle, Review, UserProfile } from './types';

export const MOCK_GAME_ARTICLES: GameArticle[] = [
  {
    id: 1,
    title: 'Cybernetic Horizon: A New Era',
    description: 'Explore a vast neon-lit metropolis in this groundbreaking open-world RPG. The future is yours to shape.',
    imageUrl: 'https://picsum.photos/seed/game1/600/400',
    category: 'RPG',
    releaseDate: '2024-10-25',
  },
  {
    id: 2,
    title: 'Project Chimera: Uprising',
    description: 'A tactical FPS that demands strategy and precision. Lead your squad to victory in intense multiplayer battles.',
    imageUrl: 'https://picsum.photos/seed/game2/600/400',
    category: 'FPS',
    releaseDate: '2024-11-15',
  },
  {
    id: 3,
    title: 'Echoes of the Void',
    description: 'Unravel the mysteries of a lost civilization in this atmospheric puzzle-adventure game. Every shadow holds a secret.',
    imageUrl: 'https://picsum.photos/seed/game3/600/400',
    category: 'Adventure',
    releaseDate: '2024-09-30',
  },
  {
    id: 4,
    title: 'Speed Demons IV',
    description: 'The ultimate arcade racing experience is back! Customize your ride and dominate the streets in high-octane races.',
    imageUrl: 'https://picsum.photos/seed/game4/600/400',
    category: 'Racing',
    releaseDate: '2025-01-10',
  },
  {
    id: 5,
    title: 'Realms of Etheria',
    description: 'A sprawling fantasy MMORPG with epic quests, massive dungeons, and a dynamic world that evolves with players.',
    imageUrl: 'https://picsum.photos/seed/game5/600/400',
    category: 'MMORPG',
    releaseDate: 'Coming Soon',
  },
  {
    id: 6,
    title: 'Galactic Frontiers',
    description: 'Build your own space empire in this 4X strategy game. Explore, expand, exploit, and exterminate your way to victory.',
    imageUrl: 'https://picsum.photos/seed/game6/600/400',
    category: 'Strategy',
    releaseDate: '2024-12-05',
  },
   {
    id: 7,
    title: 'Pixel Odyssey',
    description: 'A charming retro-inspired platformer with modern mechanics. Jump, dash, and fight your way through a vibrant pixel world.',
    imageUrl: 'https://picsum.photos/seed/game7/600/400',
    category: 'Platformer',
    releaseDate: '2024-08-20',
  },
  {
    id: 8,
    title: 'The Silent Witness',
    description: 'A detective noir story where your choices matter. Interrogate suspects, find clues, and solve a crime that could shake the city.',
    imageUrl: 'https://picsum.photos/seed/game8/600/400',
    category: 'Narrative',
    releaseDate: '2025-02-14',
  }
];

export const MOCK_NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 1,
    title: 'Cybernetic Horizon Patch 1.5 Details Revealed',
    excerpt: 'The developers have announced a massive new content update, including new story chapters, weapons, and a complete overhaul of the cybernetics system.',
    imageUrl: 'https://picsum.photos/seed/news1/600/400',
    author: 'Jane Doe',
    date: '2024-08-15',
    category: 'Update',
  },
  {
    id: 2,
    title: 'Project Chimera World Championship Announced',
    excerpt: 'The first official global tournament for Project Chimera kicks off next month with a $1 million prize pool. Qualifiers are open now!',
    imageUrl: 'https://picsum.photos/seed/news2/600/400',
    author: 'John Smith',
    date: '2024-08-12',
    category: 'Esports',
  },
  {
    id: 3,
    title: 'Indie Darling "Pixel Odyssey" Gets a Surprise Sequel',
    excerpt: 'The beloved platformer is getting a follow-up, "Pixel Odyssey 2: The Crystal Caverns", slated for a Q2 2025 release.',
    imageUrl: 'https://picsum.photos/seed/news3/600/400',
    author: 'Emily White',
    date: '2024-08-10',
    category: 'Announcement',
  },
    {
    id: 4,
    title: 'Speed Demons IV: First DLC Cars Leaked',
    excerpt: 'Images of three new hypercars have surfaced online, hinting at the first major content drop for the popular racing game.',
    imageUrl: 'https://picsum.photos/seed/news4/600/400',
    author: 'Chris Green',
    date: '2024-08-05',
    category: 'Update',
  },
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 1,
    gameTitle: 'Cybernetic Horizon',
    imageUrl: 'https://picsum.photos/seed/game1/600/400',
    score: 9.2,
    rating: 5,
    summary: 'A masterpiece of the RPG genre. Its world is breathtakingly immersive, and the storytelling is second to none. A must-play.',
  },
  {
    id: 2,
    gameTitle: 'Echoes of the Void',
    imageUrl: 'https://picsum.photos/seed/game3/600/400',
    score: 8.5,
    rating: 4,
    summary: 'A beautifully crafted puzzle game with a haunting atmosphere. While some puzzles are obtuse, the experience is incredibly rewarding.',
  },
  {
    id: 3,
    gameTitle: 'Project Chimera: Uprising',
    imageUrl: 'https://picsum.photos/seed/game2/600/400',
    score: 8.8,
    rating: 4,
    summary: 'Offers tight, tactical gunplay that rewards teamwork and strategy. A few balance issues hold it back from perfection.',
  },
  {
    id: 4,
    gameTitle: 'Pixel Odyssey',
    imageUrl: 'https://picsum.photos/seed/game7/600/400',
    score: 9.0,
    rating: 5,
    summary: 'Perfectly blends retro charm with modern design. The controls are flawless, and the level design is consistently inventive.',
  }
];

// FIX: Changed type from 'User' to 'UserProfile' to match the imported type.
export const MOCK_USER: UserProfile = {
  id: 1,
  email: 'gamerpro123@example.com',
  username: 'GamerPro123',
  avatarUrl: 'https://picsum.photos/seed/avatar/200/200',
  joinDate: '2023-05-18',
  bio: 'A passionate gamer exploring virtual worlds. Co-op and RPG enthusiast. Let\'s play!',
  favoriteGames: [
    MOCK_GAME_ARTICLES[0],
    MOCK_GAME_ARTICLES[2],
    MOCK_GAME_ARTICLES[6],
    MOCK_GAME_ARTICLES[3],
  ],
  stats: {
    reviews: 12,
    posts: 47,
  }
};
