// src/services/foodSuggestions.js
import axios from 'axios';
import * as Yup from 'yup';

// Validation Schema (using yup)
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

// Function to generate food suggestions
const generateFoodSuggestions = async (userInput) => {
  try {
    // 1. Validate user input
    await userInputSchema.validate(userInput);

    // 2. Implement Suggestion Logic (API or Client-Side Algorithm)
    if (process.env.NEXT_PUBLIC_API_KEY) {
      // 3.a. API-Based Approach (Using axios)
      const response = await axios.post(
        'https://api.example.com/suggestions',
        userInput,
        { headers: { 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` } }
      );
      return response.data.suggestions;
    } else {
      // 3.b. Client-Side Algorithm
      // Implement a simple decision tree or rule-based logic
      // Example:
      const suggestedRestaurants = [];
      if (userInput.mood === 'hungry' && userInput.timeOfDay === 'evening') {
        // ... logic for generating suggestions based on mood and time of day
      }
      return suggestedRestaurants;
    }
  } catch (error) {
    // 4. Error Handling
    if (error instanceof Yup.ValidationError) {
      return { error: error.errors.join(', ') };
    } else if (error.response && error.response.status === 401) {
      return { error: 'Unauthorized request. Please check your API key.' };
    } else {
      return { error: 'An error occurred while generating suggestions.' };
    }
  }
};

// Export the service for use in other components
export const foodSuggestionsService = generateFoodSuggestions;