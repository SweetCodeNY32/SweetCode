// TODO: add props validation
/* eslint-disable react/prop-types */
// a title of the container, which is the category name
// check box, based on status
// will have name, with link to the actual question using the slug name
// will also have difficulty and notes section

import React from 'react';
// Import MUI components
import {
  Box,
  Checkbox,
  Divider,
  Link,
  TextField,
  Typography,
} from '@mui/material';

/*
expecting props to be:
{
  question:
  questionslug:
  difficulty:
  status:
  notes:
}
*/

export default function Question({
  question,
  questionslug,
  difficulty,
  status,
  // notes,
}) {
  const link = `https://www.leetcode.com/problems/${questionslug}`;
  const progress = status === 'ac';
  const generateDifficultyComponent = (problemDifficulty) => {
    let color;
    let text;
    switch (problemDifficulty) {
      case 'easy':
        color = '#00FF00';
        text = 'easy';
        break;
      case 'medium':
        color = '#FFFF00';
        text = 'medium';
        break;
      case 'hard':
        color = '#FF0000';
        text = 'hard';
        break;
      default:
        color = '#808080';
        text = 'unknown';
    }
    return (
      <Typography
        variant="button"
        color={color}
      >
        {text}
      </Typography>
    );
  };
  // const questionKey = key;

  // react hook state to keep track of each questions notes
  // const [note, setNote] = useState(notes)

  return (
    <Box
      className="single-question"
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
      }}
    >
      {progress
        ? <Checkbox className="checkbox" checked disableRipple size="small" />
        : <Checkbox className="checkbox" disableRipple size="small" />}
      <Box
        sx={{
          display: 'flex',
          width: '30%',
        }}
      >
        <Link href={link}>{question}</Link>
      </Box>
      {generateDifficultyComponent(difficulty)}
      {/* <TextField
        class='question-notes'
        label='Notes'
        multiline
        maxRows={4}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <Button
        class="save-question-buttom"
        variant="outlined"
        onClick={(note, questionKey) => props.handleNoteSubmit(note, questionKey)}
        >Add Question</Button> */}
    </Box>
  );
}
