import type { User } from './types';
import { MOCK_USER } from './constants';

// --- SIMULATED DATABASE ---
// In a real application, this data would live in your database.
// We are simulating it here for demonstration purposes.
let currentUser: User = { ...MOCK_USER };

// --- SIMULATED NETWORK LATENCY ---
const networkDelay = 800; // in milliseconds

// --- SIMULATED API FUNCTIONS ---

/**
 * Simulates a user login API call.
 * @param email - The user's email.
 * @param password - The user's password.
 * @returns A Promise that resolves with the User object on success.
 * @throws An error if login fails.
 */
export const login = (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email.toLowerCase() === currentUser.email.toLowerCase() && password === 'password123') {
        console.log('API: Login successful for', email);
        resolve({ ...currentUser });
      } else {
        console.error('API: Login failed for', email);
        reject(new Error('Invalid email or password.'));
      }
    }, networkDelay);
  });
};

/**
 * Simulates a user registration API call.
 * @param username - The new user's username.
 * @param email - The new user's email.
 * @param password - The new user's password.
 * @returns A Promise that resolves with the newly created User object.
 * @throws An error if registration fails (e.g., email exists).
 */
export const register = (username: string, email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email.toLowerCase() === currentUser.email.toLowerCase()) {
        console.error('API: Registration failed. Email already exists:', email);
        reject(new Error('An account with this email already exists.'));
        return;
      }

      // In a real app, you'd create a new user record. Here, we'll just update our mock user.
      const newUser: User = {
        ...MOCK_USER, // Start with some mock data
        id: Date.now(), // Generate a simple unique ID
        username,
        email,
        joinDate: new Date().toISOString(),
        bio: '', // Bio starts empty
      };
      
      currentUser = newUser;
      console.log('API: Registration successful. New user:', newUser);
      resolve({ ...currentUser });
    }, networkDelay);
  });
};


/**
 * Simulates updating a user's profile.
 * @param updatedData - The user object with updated fields.
 * @returns A Promise that resolves with the updated User object.
 */
export const updateUser = (updatedData: User): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('API: Updating user data to:', updatedData);
            currentUser = { ...updatedData };
            resolve({ ...currentUser });
        }, networkDelay);
    });
};
