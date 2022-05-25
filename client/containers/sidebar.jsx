//sidebar component that will have a title: "Your Study Guides"
//will have a 'create a new study guide' and [+] button

//will also have all of the other study guide names 
import React, {useState} from 'react';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';

const Sidebar = (props) => {
  //state that will hold the names of study guides in the side bar currently
  const [studyGuides, setStudyGuides] = useState(props.studyGuideNames);
  const username = props.username;

  console.log('your study guides:', studyGuides);

  
  const studyGuideArray = [];
  const studyGuideLength = studyGuides.length;
  for (let i = 0; i < studyGuideLength; i++){
    studyGuideArray.push(
      <li key={`studyGuide${i}`}><Link to={`/${studyGuides[i]}`}>
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
    <div className='sidebar'>
      <h3 className="intro">Hey {username}, here are your study guides!</h3>
      <ul>
        <li><Button variant="text">Create a new study guide</Button></li>
        {studyGuideArray}
      </ul>
    </div>
  )
}

export default Sidebar;