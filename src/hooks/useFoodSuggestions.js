import { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { foodSuggestionsService } from '../services/foodSuggestions';

// Input validation schema
const userInputSchema = Yup.object().shape({
  timeOfDay: Yup.string()
    .required('Time of day is required')
    .oneOf(['morning', 'afternoon', 'evening'], 'Invalid time of day'),
  mood: Yup.string()
    .required('Mood is required')
    .oneOf(['happy', 'sad', 'hungry', 'tired'], 'Invalid mood'),
  recentMeals: Yup.string(),
  dietaryRestrictions: Yup.string(),
});

function useFoodSuggestions(foodSuggestionsService?: (userInput: any) => Promise<any>) {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateSuggestions = async (userInput: any) => {
    // Validate user input
    try {
      await userInputSchema.validate(userInput);
    } catch (err) {
      setError(err);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const suggestions = await (foodSuggestionsService
        ? foodSuggestionsService(userInput)
        : foodSuggestionsService(userInput)); // Client-side or API call
      setSuggestions(suggestions);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { generateSuggestions, suggestions, isLoading, error };
}

export default useFoodSuggestions;