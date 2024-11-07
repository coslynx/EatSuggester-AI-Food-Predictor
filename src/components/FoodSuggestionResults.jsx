import React from 'react';
import { FoodSuggestionResultItem } from '../components/FoodSuggestionResultItem';
import { useFoodSuggestions } from '../hooks/useFoodSuggestions';
import { Typography } from '@material-ui/core';

const FoodSuggestionResults = () => {
  const { suggestions, isLoading, error } = useFoodSuggestions();

  return (
    <div className="container mx-auto p-4 mt-8">
      {isLoading && (
        <Typography variant="h6" className="text-center mb-4">
          Generating Suggestions...
        </Typography>
      )}

      {error && (
        <Typography variant="body1" className="text-center mb-4" color="error">
          An error occurred while generating suggestions. Please try again.
        </Typography>
      )}

      {suggestions.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {suggestions.map((suggestion) => (
            <FoodSuggestionResultItem
              key={suggestion.id || suggestion.name}
              suggestion={suggestion}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodSuggestionResults;