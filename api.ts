
// THIS FILE REPRESENTS THE FRONTEND'S API CLIENT
// It acts as a bridge between the UI components and the simulated backend server.

import type { BaseUser, UserProfile, GameArticle, Review, NewsArticle } from './types';
import * as server from './server';

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
  return server.handleLoginRequest(email, password);
};

export const register = async (username: string, email: string, password: string): Promise<BaseUser> => {
  await networkDelay(800);
  return server.handleRegisterRequest(username, email, password);
};


export const updateUserProfile = async (updatedData: UserProfile): Promise<UserProfile> => {
    await networkDelay(800);
    return server.handleUpdateUserProfileRequest(updatedData);
};

export const getUserProfile = async (userId: number): Promise<UserProfile> => {
  await networkDelay(400);
  return server.handleGetUserProfileRequest(userId);
};

export const getGames = async (): Promise<GameArticle[]> => {
  await networkDelay(500);
  return server.handleGetGamesRequest();
};

export const getUpcomingGames = async (): Promise<GameArticle[]> => {
  await networkDelay(500);
  return server.handleGetUpcomingGamesRequest();
};

export const getReviews = async (): Promise<Review[]> => {
  await networkDelay(500);
  return server.handleGetReviewsRequest();
};

export const getNews = async (): Promise<NewsArticle[]> => {
  await networkDelay(500);
  return server.handleGetNewsRequest();
};

export const addFavorite = async (userId: number, gameId: number): Promise<UserProfile> => {
    await networkDelay(300);
    return server.handleAddFavoriteRequest(userId, gameId);
};

export const removeFavorite = async (userId: number, gameId: number): Promise<UserProfile> => {
    await networkDelay(300);
    return server.handleRemoveFavoriteRequest(userId, gameId);
};