import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';

const FoodSuggestionForm = () => {
  const initialValues = {
    timeOfDay: 'evening',
    recentMeals: '',
    mood: 'happy',
    dietaryRestrictions: '',
  };

  const validationSchema = Yup.object().shape({
    timeOfDay: Yup.string()
      .required('Time of day is required')
      .oneOf(['morning', 'afternoon', 'evening'], 'Invalid time of day'),
    mood: Yup.string()
      .required('Mood is required')
      .oneOf(['happy', 'sad', 'hungry', 'tired'], 'Invalid mood'),
    recentMeals: Yup.string(),
    dietaryRestrictions: Yup.string(),
  });

  const handleSubmit = async (values) => {
    // ... Send the validated data to the main application logic in src/pages/index.js
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            as={TextField}
            name="timeOfDay"
            label="Time of Day"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage name="timeOfDay" component="div" className="text-red-500" />

          <Field
            as={TextField}
            name="mood"
            label="Mood"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <ErrorMessage name="mood" component="div" className="text-red-500" />

          <Field
            as={TextField}
            name="recentMeals"
            label="Recent Meals (comma-separated)"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Field
            as={TextField}
            name="dietaryRestrictions"
            label="Dietary Restrictions"
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            variant="contained"
            color="primary"
          >
            {isSubmitting ? 'Generating Suggestions...' : 'Generate Suggestions'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FoodSuggestionForm;