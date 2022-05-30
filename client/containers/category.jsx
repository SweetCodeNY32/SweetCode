// TODO: add props validation
/* eslint-disable react/prop-types */

// category container
// will have the name of the category as the header
// will have a bunch of question components
// will also have the add question component

import React, { useState, useEffect } from 'react';
// Import MUI components
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Import local components
import Question from '../components/Question';
import AddQuestion from '../components/addQuestion';

/*
expecting props to be:
{
  category: category name
  questions: [
    {
      question: question name
      questionslug: question slug
      difficulty: difficulty
      notes: notes to add
    }
  ]
}
*/

export default function Category({
  category,
  questions,
  categoryIndex,
  handleQuestionSubmit,
}) {
  // loop to iterate through the questions associated with this category
  const questionComponents = [];
  for (let i = 0; i < questions.length; i += 1) {
    questionComponents.push(
      <Box>
        <Divider orientation="horizontal" />
        <Question
          {...questions[i]}
          category={category}
          categoryIndex={categoryIndex}
          // andleNoteSubmit={handleNoteSubmit}
          id={`${category}question${i}`}
        />
      </Box>,
    );
  }

  return (
    <Box
      className="category"
      sx={{
        p: 1,
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{category}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {questionComponents}
          <Divider orientation="horizontal" />
          <AddQuestion
            category={category}
            handleSubmit={handleQuestionSubmit}
            categoryIndex={categoryIndex}
          />
        </AccordionDetails>
      </Accordion>
      {questionComponents}
    </Box>
  );
}
