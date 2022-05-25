//sidebar component that will have a title: "Your Study Guides"
//will have a 'create a new study guide' and [+] button

//will also have all of the other study guide names 
import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';

const Sidebar = (props) => {
  //state that will hold the names of study guides in the side bar currently
  const [studyGuides, setStudyGuides] = useState([]);
  const username = props.username;
  
  useEffect(()=> {
    setStudyGuides(props.studyGuideNames)
  },[props.studyGuideNames])

  const studyGuideArray = [];
  const studyGuideLength = studyGuides.length;
  for (let i = 0; i < studyGuideLength; i++){
    studyGuideArray.push(
      <li className="sidebar-guides" key={`studyGuide${i}`}><Link to={`/${studyGuides[i]}`}>
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
      <ul>
        <li id="sidebar-button"><Button variant="text">Create a new study guide</Button></li>
        {studyGuideArray}
      </ul>
    </div> 
  )
}

export default Sidebar;