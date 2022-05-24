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
    let response = await axios.get('/studyguides');
    setStudyGuides(response);
  }, [])


  //iterating through the length of studyGuides 
  let studyGuideLength = studyGuides.length;
  let studyGuideArray = []
  for (let i = 0; i < studyGuideLength; i++){
    let guideName = studyGuides[i].name;
    let categories = studyGuides[i].categories;
    studyGuideArray.push(
      <StudyGuide 
        name={guideName}
        categories={categories}
      />
    )
  }
  return(
    <div class="home">
      <Sidebar username={username}/>
      
    </div>
  )
}



export default Home;