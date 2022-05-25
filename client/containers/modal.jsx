//will be the modal which will open after clicking "add a new study guide"

//will have the text input field with a title of create a new study guide
//will also have another input field for adding categories with another add button
//will show which categories you have added so far   

//will finally have a submit button which will add a new study guide to database, along with additional named categories 
//submit button will clear all input fields and close the modal itself 


import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



const Modal = (props) => {
  const [guideName, setGuideName] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]); 


  return(
    <div class="modal">
      <div id="modal-add-guide">
        <h2>Create a new study setGuideName</h2>
        <TextField 
        className="modal-guide-text"
        variant="outlined" 
        label="Add study guide name here"
        onChange={(e) => setGuideName(e.target.value)}
        >{guideName}</TextField>
      </div>
      <div id="modal-category">
        <TextField 
        className="modal-category-text"
        variant="outlined" 
        label="Add categoru here"
        onChange={(e) => setCategory(e.target.value)}
        >{guideName}</TextField>
      <Button 
        className="modal-category-button"
        variant="outlined"
        onClick={() => setCategories(...categories, category)}
      >Add Category</Button>
      {categories}
      </div>
      <div id="modal-submit">
        <Button 
          className="modal-category-button"
          variant="outlined"
          onClick={() => props.handleSubmit(guideName, categories)}
        >Submit</Button>
      </div>

    </div>
  );
}


export default Modal;