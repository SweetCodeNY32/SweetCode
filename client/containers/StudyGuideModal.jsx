//will be the modal which will open after clicking "add a new study guide"

//will have the text input field with a title of create a new study guide
//will also have another input field for adding categories with another add button
//will show which categories you have added so far   

//will finally have a submit button which will add a new study guide to database, along with additional named categories 
//submit button will clear all input fields and close the modal itself 


import React, {useState} from 'react';
import { Box, Button, Backdrop } from '@mui/material';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';



export default function NewStudyGuideModal ({ open, handleClose }) {
  const [guideName, setGuideName] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]); 

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1
  };


  return(
      <Modal sx={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}
        aria-labelledby="add-new-study-guide"
        aria-describedby="add-study-guide"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{addtimeout: 500,
        }}
        >
        <Fade in={open}>
          <Box sx={style}> 
            <TextField 
              className="modal-category-text"
              variant="outlined" 
              label="Add category here"
              onChange={(e) => setCategory(e.target.value)}
            >
              {guideName}
            </TextField> 
          </Box>
        </Fade>
      </Modal>   
  );
}

//onclick for create study guide button
// POST to /api/studyguide/create
// need data 
//  {
//     "userId": "U_kgDOBYpsgA",
//     "name": "Test Study Guide",
//     "categories": ["Binary Search Trees", "Matrices"]
//  }

      {/* <div id="modal-category">
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
      </div> */}