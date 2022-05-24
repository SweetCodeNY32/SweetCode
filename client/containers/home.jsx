//will house the sidebar component and study guide container 

import React, { useEffect } from 'react';
import Sidebar from '../components/sidebar.jsx';
import studyGuide from './studyGuide.jsx';



const Home = (props) => {
  const username = props.user.username;
  const userId = props.user.userId;
  const [studyGuides, setStudyGuides] = useState([]);
  //will have useEffect logic to make fetch request to server for all of the study guides associated with this user 
  useEffect(() => {
    //getting study guides from studyguides endpoint
    //expect an array of objects:
    /*
    [
      {
        name:
        categories: []
      }
    ]

    */
    let response = await axios.get('/studyguides');

  }, [])


  return(
    <div class="home">
      <Sidebar />
      
    </div>
  )
}



export default Home;