
export interface GameArticle {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  releaseDate: string;
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

export interface Review {
  id: number;
  gameTitle: string;
  imageUrl: string;
  score: number; // e.g. 9.5
  rating: number; // stars 1-5
  summary: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  avatarUrl: string;
  joinDate: string;
  bio?: string;
  favoriteGames: GameArticle[];
  stats: {
    reviews: number;
    posts: number;
  };
}

export interface Recommendation {
  title: string;
  description: string;
  genre: string;
}