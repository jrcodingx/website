// THIS FILE REPRESENTS THE FRONTEND'S API CLIENT
// It acts as a bridge between the UI components and the simulated backend server.

import type { BaseUser, UserProfile, GameArticle, Review, NewsArticle } from './types';
import {
  handleLoginRequest,
  handleRegisterRequest,
  handleUpdateUserProfileRequest,
  handleGetUserProfileRequest,
  handleGetGamesRequest,
  handleGetUpcomingGamesRequest,
  handleGetReviewsRequest,
  handleGetNewsRequest,
  handleAddFavoriteRequest,
  handleRemoveFavoriteRequest
} from './server';

// --- HELPER FUNCTIONS ---

const networkDelay = (ms: number) => new Promise(res => setTimeout(res, ms));

// --- API FUNCTIONS (These are called by the UI) ---

export const login = async (email: string, password: string): Promise<BaseUser> => {
  await networkDelay(800);
  // In a real app, this would be a fetch() call:
  // const response = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
  // const data = await response.json();
  // if (!response.ok) throw new Error(data.message);
  // return data;
  return handleLoginRequest(email, password);
};

export const register = async (username: string, email: string, password: string): Promise<BaseUser> => {
  await networkDelay(800);
  return handleRegisterRequest(username, email, password);
};


export const updateUserProfile = async (updatedData: UserProfile): Promise<UserProfile> => {
    await networkDelay(800);
    return handleUpdateUserProfileRequest(updatedData);
};

export const getUserProfile = async (userId: number): Promise<UserProfile> => {
  await networkDelay(400);
  return handleGetUserProfileRequest(userId);
};

export const getGames = async (): Promise<GameArticle[]> => {
  await networkDelay(500);
  return handleGetGamesRequest();
};

export const getUpcomingGames = async (): Promise<GameArticle[]> => {
  await networkDelay(500);
  return handleGetUpcomingGamesRequest();
};

export const getReviews = async (): Promise<Review[]> => {
  await networkDelay(500);
  return handleGetReviewsRequest();
};

export const getNews = async (): Promise<NewsArticle[]> => {
  await networkDelay(500);
  return handleGetNewsRequest();
};

export const addFavorite = async (userId: number, gameId: number): Promise<UserProfile> => {
    await networkDelay(300);
    return handleAddFavoriteRequest(userId, gameId);
};

export const removeFavorite = async (userId: number, gameId: number): Promise<UserProfile> => {
    await networkDelay(300);
    return handleRemoveFavoriteRequest(userId, gameId);
};