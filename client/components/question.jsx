//a title of the container, which is the category name 
//check box, based on status
//will have name, with link to the actual question using the slug name 
//will also have difficulty and notes section 

import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const Question = (props) => {
  const question = props.question;
  const link = `https://www.leetcode.com/problems/${props.questionslug}`;
  const difficulty = props.difficulty;
  const status = props.status === 'ac' ? true : false;
  const notes = props.notes;

  return(
    <div class="question">
      {status
        ? <Checkbox checked/>
        : <Checkbox />}
      <a class="link" href={link}>{question}</a>
      <p class="difficulty">{difficulty}</p>
      <TextField
        class='question-notes'
        label='Notes'
        multiline
        maxRows={4}
        value={notes}
        onChange={props.handleChange}
      />
    </div>
  )
}


export default Question;