//component used to add categories to the study guide
//will have imput field and add category button

import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddCategory = (props) => {

  return(
    <div class="add-category">
      <TextField variant="outlined" label="Add category here"></TextField>
      <Button variant="outlined">Add Category</Button>
    </div>
  )
}

export default AddCategory;