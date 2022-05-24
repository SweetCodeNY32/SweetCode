//will house the sidebar component and study guide container 

import React, { useEffect } from 'react';
import Sidebar from '../components/sidebar.jsx';
import StudyGuide from './studyGuide.jsx';



const Home = (props) => {
  const username = props.user.username;
  const userId = props.user.userId;
  const [studyGuides, setStudyGuides] = useState([]);
  //will have useEffect logic to make fetch request to server for all of the study guides associated with this user 
  useEffect(() => {
    //getting study guides from studyguides endpoint
    //expect response to be an array of objects:
    /*
    [
      {
        name:
        categories: []
      }
    ]

    */
    let response = await axios.post('/studyguides',{
      userId
    });
    
    setStudyGuides(response);
  }, [])


  //iterating through the length of studyGuides 
  //creating an array of studyGuide objects and array of studyGuide names 
  let studyGuideLength = studyGuides.length;
  let studyGuideArray = []
  let studyGuideNames = [];
  for (let i = 0; i < studyGuideLength; i++){
    let guideName = studyGuides[i].name;
    let categories = studyGuides[i].categories;
    studyGuideArray.push(
      <StudyGuide 
        name={guideName}
        categories={categories}
      />
    )
    studyGuideNames.push(guideName);
  }


  return(
    <div class="home">
      <Sidebar 
        username={username}
        studyGuideNames={studyGuideNames}
      />
      
    </div>
  )
}



export default Home;