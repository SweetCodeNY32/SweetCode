//component used to add questions to a specific category
//will have input text field and add question button

import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AddQuestion = (props) => {


  return(
    <div class="add-question">
      <TextField variant="outlined" label="Add question here"></TextField>
      <Button variant="outlined">Add Question</Button>
    </div>
  )
}

export default AddQuestion;