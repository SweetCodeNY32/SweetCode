//component used to add questions to a specific category
//will have input text field and add question button

import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

/*
expecting props to be:
{
  handleSubmit: handleQuestionSubmit
}

*/

const AddQuestion = (props) => {
  console.log('props at AddQuestion', props);
  const [question, setQuestion] = useState('');
  const {category} = props;
  return( 
    <div className="add-question">
      <TextField
        variant="outlined" 
        label="Add question here"
        onChange={(e) => setQuestion(e.target.value)}
        >{question}</TextField>
      
      <Button 
        variant="outlined"
        onClick={() => props.handleSubmit(question, category)}
        >Add Question</Button>
    </div>
  )
}

export default AddQuestion;