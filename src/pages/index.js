import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FoodSuggestionForm } from '../components/FoodSuggestionForm';
import { FoodSuggestionResults } from '../components/FoodSuggestionResults';
import { useFoodSuggestions } from '../hooks/useFoodSuggestions';
import { foodSuggestionsService } from '../services/foodSuggestions';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const { generateSuggestions } = useFoodSuggestions(foodSuggestionsService);

  const handleSubmit = async (values) => {
    setIsLoading(true);
    setError(null);

    try {
      const suggestions = await generateSuggestions(values);
      setSuggestions(suggestions);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>EatSuggester AI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">EatSuggester AI</h1>

        <Formik
          initialValues={{
            timeOfDay: 'evening',
            recentMeals: '',
            mood: 'happy',
            dietaryRestrictions: '',
          }}
          validationSchema={Yup.object({
            timeOfDay: Yup.string().required('Required'),
            mood: Yup.string().required('Required'),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <FoodSuggestionForm />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {isLoading ? 'Generating Suggestions...' : 'Generate Suggestions'}
              </button>
              {error && (
                <div className="text-red-500 mt-2">{error.message}</div>
              )}
            </Form>
          )}
        </Formik>

        {suggestions.length > 0 && (
          <div className="mt-8">
            <FoodSuggestionResults suggestions={suggestions} />
          </div>
        )}
      </main>
    </>
  );
}