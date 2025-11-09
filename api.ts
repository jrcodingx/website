import type { BaseUser, UserProfile, GameArticle, Review, NewsArticle } from './types';

// --- SIMULATED DATABASE ---
// This simulates a database based on the provided schema.
// In a real application, a backend server would manage this.

// Corresponds to the `users` table
interface DbUser {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  avatar_url: string;
  bio: string;
  status: 'active' | 'inactive' | 'banned';
  created_at: string;
  updated_at: string;
}

// Corresponds to the `games` table
interface DbGame {
  id: number;
  title: string;
  release_year: number;
  genre: string;
  description: string;
  average_score: number;
  // For UI convenience
  imageUrl: string;
}

// Corresponds to the `reviews` table
interface DbReview {
  id: number;
  user_id: number;
  game_id: number;
  score: number;
  review_text: string;
  created_at: string;
}

// Corresponds to the `user_favorite_games` table
interface DbUserFavoriteGame {
  user_id: number;
  game_id: number;
}


// --- SIMULATED DATA ---
const db = {
  users: [
    {
      id: 1,
      username: 'GamerPro123',
      email: 'gamerpro123@example.com',
      password_hash: 'password123', // In a real app, this would be a hash
      avatar_url: 'https://picsum.photos/seed/avatar/200/200',
      bio: 'A passionate gamer exploring virtual worlds. Co-op and RPG enthusiast. Let\'s play!',
      status: 'active' as const,
      created_at: '2023-05-18T10:00:00Z',
      updated_at: '2023-05-18T10:00:00Z',
    },
  ] as DbUser[],
  games: [
    { id: 1, title: 'Cybernetic Horizon: A New Era', release_year: 2024, genre: 'RPG', description: 'Explore a vast neon-lit metropolis in this groundbreaking open-world RPG. The future is yours to shape.', average_score: 9.2, imageUrl: 'https://picsum.photos/seed/game1/600/400' },
    { id: 2, title: 'Project Chimera: Uprising', release_year: 2024, genre: 'FPS', description: 'A tactical FPS that demands strategy and precision. Lead your squad to victory in intense multiplayer battles.', average_score: 8.8, imageUrl: 'https://picsum.photos/seed/game2/600/400' },
    { id: 3, title: 'Echoes of the Void', release_year: 2024, genre: 'Adventure', description: 'Unravel the mysteries of a lost civilization in this atmospheric puzzle-adventure game. Every shadow holds a secret.', average_score: 8.5, imageUrl: 'https://picsum.photos/seed/game3/600/400' },
    { id: 4, title: 'Speed Demons IV', release_year: 2025, genre: 'Racing', description: 'The ultimate arcade racing experience is back! Customize your ride and dominate the streets in high-octane races.', average_score: 8.0, imageUrl: 'https://picsum.photos/seed/game4/600/400' },
    { id: 5, title: 'Realms of Etheria', release_year: 2025, genre: 'MMORPG', description: 'A sprawling fantasy MMORPG with epic quests, massive dungeons, and a dynamic world that evolves with players.', average_score: 0.0, imageUrl: 'https://picsum.photos/seed/game5/600/400' }, // "Coming soon"
    { id: 6, title: 'Galactic Frontiers', release_year: 2024, genre: 'Strategy', description: 'Build your own space empire in this 4X strategy game. Explore, expand, exploit, and exterminate your way to victory.', average_score: 8.7, imageUrl: 'https://picsum.photos/seed/game6/600/400' },
    { id: 7, title: 'Pixel Odyssey', release_year: 2024, genre: 'Platformer', description: 'A charming retro-inspired platformer with modern mechanics. Jump, dash, and fight your way through a vibrant pixel world.', average_score: 9.0, imageUrl: 'https://picsum.photos/seed/game7/600/400' },
    { id: 8, title: 'The Silent Witness', release_year: 2025, genre: 'Narrative', description: 'A detective noir story where your choices matter. Interrogate suspects, find clues, and solve a crime that could shake the city.', average_score: 0.0, imageUrl: 'https://picsum.photos/seed/game8/600/400' },
  ] as DbGame[],
  reviews: [
    { id: 1, user_id: 1, game_id: 1, score: 9.2, review_text: 'A masterpiece of the RPG genre. Its world is breathtakingly immersive, and the storytelling is second to none. A must-play.', created_at: '2024-10-28T10:00:00Z' },
    { id: 2, user_id: 1, game_id: 3, score: 8.5, review_text: 'A beautifully crafted puzzle game with a haunting atmosphere. While some puzzles are obtuse, the experience is incredibly rewarding.', created_at: '2024-10-05T10:00:00Z' },
    { id: 3, user_id: 1, game_id: 2, score: 8.8, review_text: 'Offers tight, tactical gunplay that rewards teamwork and strategy. A few balance issues hold it back from perfection.', created_at: '2024-11-20T10:00:00Z' },
    { id: 4, user_id: 1, game_id: 7, score: 9.0, review_text: 'Perfectly blends retro charm with modern design. The controls are flawless, and the level design is consistently inventive.', created_at: '2024-08-25T10:00:00Z' },
  ] as DbReview[],
  user_favorite_games: [
    { user_id: 1, game_id: 1 },
    { user_id: 1, game_id: 3 },
    { user_id: 1, game_id: 7 },
    { user_id: 1, game_id: 4 },
  ] as DbUserFavoriteGame[],
  news: [
    { id: 1, title: 'Cybernetic Horizon Patch 1.5 Details Revealed', excerpt: 'The developers have announced a massive new content update, including new story chapters, weapons, and a complete overhaul of the cybernetics system.', imageUrl: 'https://picsum.photos/seed/news1/600/400', author: 'Jane Doe', date: '2024-08-15', category: 'Update' as const },
    { id: 2, title: 'Project Chimera World Championship Announced', excerpt: 'The first official global tournament for Project Chimera kicks off next month with a $1 million prize pool. Qualifiers are open now!', imageUrl: 'https://picsum.photos/seed/news2/600/400', author: 'John Smith', date: '2024-08-12', category: 'Esports' as const },
    { id: 3, title: 'Indie Darling "Pixel Odyssey" Gets a Surprise Sequel', excerpt: 'The beloved platformer is getting a follow-up, "Pixel Odyssey 2: The Crystal Caverns", slated for a Q2 2025 release.', imageUrl: 'https://picsum.photos/seed/news3/600/400', author: 'Emily White', date: '2024-08-10', category: 'Announcement' as const },
    { id: 4, title: 'Speed Demons IV: First DLC Cars Leaked', excerpt: 'Images of three new hypercars have surfaced online, hinting at the first major content drop for the popular racing game.', imageUrl: 'https://picsum.photos/seed/news4/600/400', author: 'Chris Green', date: '2024-08-05', category: 'Update' as const },
  ] as NewsArticle[],
};

// --- HELPER FUNCTIONS ---

const networkDelay = (ms: number) => new Promise(res => setTimeout(res, ms));

const mapDbUserToBaseUser = (dbUser: DbUser): BaseUser => ({
  id: dbUser.id,
  email: dbUser.email,
  username: dbUser.username,
  avatarUrl: dbUser.avatar_url,
  joinDate: dbUser.created_at,
  bio: dbUser.bio,
});

const mapDbGameToGameArticle = (dbGame: DbGame): GameArticle => {
  let releaseDate = dbGame.release_year.toString();
  // Simplified logic for "Coming Soon"
  const isReleased = new Date().getFullYear() > dbGame.release_year;
  if (!isReleased && dbGame.average_score === 0.0) {
     const isThisYear = new Date().getFullYear() === dbGame.release_year;
     if (!isThisYear) {
        releaseDate = 'Coming Soon';
     }
  }
  
  return {
    id: dbGame.id,
    title: dbGame.title,
    description: dbGame.description,
    imageUrl: dbGame.imageUrl,
    category: dbGame.genre,
    releaseDate, // Simplified, in a real app this would be a full date
    average_score: dbGame.average_score,
  }
};


// --- API FUNCTIONS ---

export const login = async (email: string, password: string): Promise<BaseUser> => {
  await networkDelay(800);
  const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());

  if (user && user.password_hash === password && user.status === 'active') {
    console.log('API: Login successful for', email);
    return mapDbUserToBaseUser(user);
  } else {
    console.error('API: Login failed for', email);
    throw new Error('Invalid email or password.');
  }
};

export const register = async (username: string, email: string, password: string): Promise<BaseUser> => {
  await networkDelay(800);
  if (db.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error('An account with this email already exists.');
  }
  if (db.users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
    throw new Error('This username is already taken.');
  }

  const now = new Date().toISOString();
  const newUser: DbUser = {
    id: Date.now(), // simple unique ID
    username,
    email,
    password_hash: password,
    avatar_url: `https://picsum.photos/seed/${Date.now()}/200/200`,
    bio: '',
    status: 'active',
    created_at: now,
    updated_at: now,
  };
  
  db.users.push(newUser);
  console.log('API: Registration successful. New user:', newUser);
  return mapDbUserToBaseUser(newUser);
};


export const updateUserProfile = async (updatedData: UserProfile): Promise<UserProfile> => {
    await networkDelay(800);
    const userIndex = db.users.findIndex(u => u.id === updatedData.id);
    if (userIndex === -1) {
        throw new Error("User not found");
    }
    
    const dbUser = db.users[userIndex];
    dbUser.username = updatedData.username;
    dbUser.bio = updatedData.bio || '';
    dbUser.avatar_url = updatedData.avatarUrl;
    dbUser.updated_at = new Date().toISOString();

    db.users[userIndex] = dbUser;
    console.log('API: Updating user data to:', dbUser);
    
    // Return the full profile after update
    return getUserProfile(updatedData.id);
};

export const getUserProfile = async (userId: number): Promise<UserProfile> => {
  await networkDelay(400);
  const user = db.users.find(u => u.id === userId);
  if (!user) {
    throw new Error("User not found");
  }

  // "JOIN" to get favorite games
  const favoriteGameIds = db.user_favorite_games
    .filter(fav => fav.user_id === userId)
    .map(fav => fav.game_id);
  
  const favoriteGames = db.games
    .filter(game => favoriteGameIds.includes(game.id))
    .map(mapDbGameToGameArticle);

  // Calculate stats
  const reviewsCount = db.reviews.filter(r => r.user_id === userId).length;
  // Post count is still mock as there is no 'posts' table
  const postsCount = 47;

  return {
    ...mapDbUserToBaseUser(user),
    favoriteGames,
    stats: {
      reviews: reviewsCount,
      posts: postsCount,
    }
  };
};

export const getGames = async (): Promise<GameArticle[]> => {
  await networkDelay(500);
  return db.games.map(mapDbGameToGameArticle);
};

export const getUpcomingGames = async (): Promise<GameArticle[]> => {
  await networkDelay(500);
  const currentYear = new Date().getFullYear();
  return db.games
    .filter(game => game.release_year > currentYear)
    .map(mapDbGameToGameArticle);
};

export const getReviews = async (): Promise<Review[]> => {
  await networkDelay(500);
  // "JOIN" reviews with games
  return db.reviews.map(review => {
    const game = db.games.find(g => g.id === review.game_id);
    return {
      id: review.id,
      gameTitle: game ? game.title : 'Unknown Game',
      imageUrl: game ? game.imageUrl : 'https://picsum.photos/seed/unknown/600/400',
      score: review.score,
      rating: Math.round(review.score / 2), // Convert score 1-10 to rating 1-5
      summary: review.review_text,
    };
  }).sort((a,b) => b.score - a.score); // sort by score desc
};

export const getNews = async (): Promise<NewsArticle[]> => {
  await networkDelay(500);
  return [...db.news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
