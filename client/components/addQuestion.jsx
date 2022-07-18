// TODO: add props validation
/* eslint-disable react/prop-types */
// component used to add questions to a specific category
// will have input text field and add question button

import React, { useState } from 'react';
// Import MUI components
import {
  Box,
  Button,
  TextField,
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

/*
expecting props to be:
{
  handleSubmit: handleQuestionSubmit
}

*/

export default function AddQuestion({ category, categoryIndex, handleSubmit }) {
  const [question, setQuestion] = useState('');
  return (
    <Box className="add-question">
      <TextField
        className="question-text"
        variant="outlined"
        size="small"
        label="Search for a new question"
        onChange={(e) => setQuestion(e.target.value)}
      >
        {question}
      </TextField>
      <Button
        className="question-button"
        variant="outlined"
        onClick={() => handleSubmit(question, category, categoryIndex)}
      >
        Add Question
      </Button>
    </Box>
  );
}
