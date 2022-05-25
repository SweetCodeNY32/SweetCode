//sidebar component that will have a title: "Your Study Guides"
//will have a 'create a new study guide' and [+] button

//will also have all of the other study guide names 
import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';
import Modal from '@mui/material/Modal';
import NewStudyGuideModal from './StudyGuideModal'
import Fade from '@mui/material/Fade';
import { Box, Backdrop } from '@mui/material';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

const Sidebar = (props) => {
  //state that will hold the names of study guides in the side bar currently
  const [studyGuides, setStudyGuides] = useState([]);
  const username = props.username;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log('props in sidebar: ', props);
  console.log('studyguides in sidebar:', studyGuides);

  useEffect(()=> {
    setStudyGuides(props.studyGuideNames)
  },[props.studyGuideNames])

  const studyGuideArray = [];
  const studyGuideLength = studyGuides.length;
  for (let i = 0; i < studyGuideLength; i++){
    studyGuideArray.push(
      <li className="sidebar-guides" key={`route${studyGuides[i]}`}><Link to={`/${studyGuides[i]}`}>
        <Button 
          variant="text" 
        >{studyGuides[i]}</Button>
      </Link></li>

      /* <li key={`studyGuideSidebar${i}`}>
        <Button variant="text">{studyGuides[i]}</Button>
      </li> */
    )
  }

  return(
    <div id='sidebar'>
      <h3 id="sidebar-intro">Hey {username}, here are your study guides!</h3>
        <Button
          onClick={handleOpen}
          variant="contained"
        >
          Create a new study guide 
        </Button>
        <NewStudyGuideModal open={open} handleClose={handleClose} handleSubmit={props.handleModalSubmit}/> 
         <ul>
           {studyGuideArray}
         </ul>
         

    </div>

  )
}

export default Sidebar;