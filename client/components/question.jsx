//a title of the container, which is the category name 
//check box, based on status
//will have name, with link to the actual question using the slug name 
//will also have difficulty and notes section 

import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

const Question = (props) => {
  const question = props.question;
  const link = `https://www.leetcode.com/problems/${props.questionslug}`;
  const difficulty = props.difficulty;
  const status = props.status === 'ac' ? true : false;
  // const notes = props.notes;
  const questionKey = props.key;

  //react hook state to keep track of each questions notes
  // const [note, setNote] = useState(notes)

  return(
    <div className="question">
      {status
        ? <Checkbox checked/>
        : <Checkbox />}
      <a className="link" href={link}>{question}</a>
      <p className="difficulty">{difficulty}</p>
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
    </div>
  )
}


export default Question;