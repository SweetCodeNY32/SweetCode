//component used to add categories to the study guide
//will have imput field and add category button

import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const AddCategory = (props) => {
  const [category, setCategory] = useState('');

  return(
    <div class="add-category">
      <TextField 
        variant="outlined" 
        label="Add category here"
        onChange={(e) => setCategory(e.target.value)}
      >{category}</TextField>
      
      <Button 
        variant="outlined"
        onClick={() => props.handleSubmit(category)}
      >Add Category</Button>
    </div>
  )
}

export default AddCategory;