import * as yup from 'yup';
import { userInputSchema } from '../services/foodSuggestions';
import { format } from 'date-fns';

// Function to validate user input
export const validateUserInput = (userInput) => {
  try {
    yup.validateSync(userInput, userInputSchema);
    return true;
  } catch (error) {
    return { error: error.errors.join(', ') };
  }
};

// Function to format a date string
export const formatDateString = (dateString, format) => {
  return format(new Date(dateString), format);
};

// Function to get a random element from an array
export const getRandomElementFromArray = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Function to generate a random restaurant suggestion
export const generateRandomRestaurantSuggestion = (restaurantData) => {
  if (restaurantData && restaurantData.length > 0) {
    return getRandomElementFromArray(restaurantData);
  } else {
    return null;
  }
};

// Function to extract the cuisine type from restaurant data
export const getCuisineFromRestaurantData = (restaurantData) => {
  return restaurantData && restaurantData.cuisine ? restaurantData.cuisine : '';
};