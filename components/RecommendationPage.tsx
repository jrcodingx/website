
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import PageHeader from './PageHeader';
import type { Recommendation } from '../types';
import SparklesIcon from './icons/SparklesIcon';

const GENRES = ['RPG', 'FPS', 'Adventure', 'Strategy', 'Racing', 'Platformer', 'MMORPG', 'Narrative'];

const RecommendationPage: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[] | null>(null);

  const handleGenreChange = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    );
  };

  const handleGetRecommendations = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRecommendations(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const schema = {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "The name of the game." },
            description: { type: Type.STRING, description: "A short, exciting paragraph explaining why this game is a good recommendation based on the user's preferences." },
            genre: { type: Type.STRING, description: "The primary genre of the game." },
          },
          required: ["title", "description", "genre"],
        },
      };

      const prompt = `Please recommend 3 video games based on the following user preferences.
        - The user likes these genres: ${selectedGenres.join(', ') || 'any'}.
        - The user is in the mood for: "${mood || 'anything fun'}".
        For each game, provide a unique title, a compelling description, and its genre.`;
        
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: schema,
        },
      });

      const parsedResponse = JSON.parse(response.text);
      setRecommendations(parsedResponse);
    } catch (err) {
      console.error("Gemini API error:", err);
      setError("Sorry, I couldn't get recommendations at this time. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="AI Game Recommendations"
        subtitle="Tell us what you like, and our AI will find your next favorite game."
      />
      <div className="max-w-3xl mx-auto bg-surface rounded-lg shadow-lg p-8">
        <form onSubmit={handleGetRecommendations}>
          <div className="mb-6">
            <label className="block text-text-main text-lg font-bold mb-3">
              Which genres do you enjoy?
            </label>
            <div className="flex flex-wrap gap-3">
              {GENRES.map(genre => (
                <button
                  type="button"
                  key={genre}
                  onClick={() => handleGenreChange(genre)}
                  className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                    selectedGenres.includes(genre)
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-background hover:bg-gray-700 text-text-secondary'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-text-main text-lg font-bold mb-3" htmlFor="mood">
              What are you in the mood for?
            </label>
            <textarea
              id="mood"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="e.g., a relaxing story-driven experience, a challenging competitive shooter, or something to play with friends..."
              className="shadow appearance-none border border-gray-600 rounded w-full py-3 px-4 bg-background text-text-main leading-tight focus:outline-none focus:ring-2 focus:ring-primary h-28 resize-none"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:bg-primary/50 disabled:cursor-not-allowed flex justify-center items-center w-full"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Finding Games...
                </>
              ) : (
                'Get Recommendations'
              )}
            </button>
          </div>
        </form>
      </div>

      {error && (
        <div className="mt-8 max-w-3xl mx-auto bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-md text-center" role="alert">
          {error}
        </div>
      )}

      {recommendations && (
        <div className="mt-12">
           <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-primary pl-4">Here are your recommendations!</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-surface rounded-lg p-6 shadow-lg border border-transparent hover:border-primary transition-colors duration-300 flex flex-col">
                <div className="flex-grow">
                  <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full uppercase">
                    {rec.genre}
                  </span>
                  <h3 className="text-2xl font-bold text-text-main my-3">{rec.title}</h3>
                  <p className="text-text-secondary text-sm">{rec.description}</p>
                </div>
              </div>
            ))}
           </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationPage;
