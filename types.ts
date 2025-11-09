
export interface GameArticle {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string; // genre
  releaseDate: string; // from release_year
  average_score?: number;
}

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  category: 'Update' | 'Announcement' | 'Esports';
}

// Represents a review with joined game data for UI
export interface Review {
  id: number;
  gameTitle: string;
  imageUrl: string;
  score: number;
  rating: number; // Will be derived from score
  summary: string;
}

// Corresponds to the core fields of the `users` table
export interface BaseUser {
  id: number;
  email: string;
  username: string;
  avatarUrl: string;
  joinDate: string; // from created_at
  bio?: string;
}

// A composite type for the profile page, including "joined" data
export interface UserProfile extends BaseUser {
  favoriteGames: GameArticle[];
  favoriteGameIds: number[]; // Added for efficient favorite checking
  stats: {
    reviews: number;
    posts: number; // This remains a mock value as no 'posts' table was provided
  };
}

export interface Recommendation {
  title: string;
  description: string;
  genre: string;
}