//will house the sidebar component and study guide container 

import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar.jsx';
import StudyGuide from './studyGuide.jsx';
import SidebarRoutes from '../components/routes.jsx'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import axios from 'axios';


const Home = (props) => {
  const username = props.user.username;
  const userId = props.user.userId;

  /*
  what are we expecting from this fetchData?
 */
  const fakeData = [
    {
      name: 'study-guide-1',
      categories: ['BSTs', 'Arrays']
    },
    {
      name: 'study-guide-2',
      categories: ['matrices', 'dynamic programming']
    }
  ];


  async function fetchData(){
    // let response = await axios.post('/api/studyguide', {
    //   userId,
    //   username
    // })
    // setStudyGuides(response);
    
  }

  //fetchData();
  const [studyGuides, setStudyGuides] = useState(fakeData);

  //will have useEffect logic to make fetch request to server for all of the study guides associated with this user 
  useEffect(() => {
    //getting study guides from studyguides endpoint
    //expect response to be an array of objects:
    // [
    //   {
    //     name:
    //     categories: []
    //   }
    // ]
    fetchData();
    
  }, []);

  //handle logic for adding new study guides 
  

  //handle logic for 

  console.log('in studyguides state: ',studyGuides);
  //iterating through the length of studyGuides 
  //creating an array of studyGuide objects and array of studyGuide names 
  const studyGuideLength = studyGuides.length;
  const studyGuideComponentArray = [];
  const studyGuideNames = [];
  const routes = [];
  for (let i = 0; i < studyGuideLength; i++){
    // let guideName = studyGuides[i].name;
    // let categories = studyGuides[i].categories;
    // studyGuideComponentArray.push(<StudyGuide name={guideName} categories={categories}/>)
    // studyGuideNames.push(guideName);

    let guideName = studyGuides[i].name;
    let categories = studyGuides[i].categories;
    let component = <StudyGuide name={guideName} categories={categories}/>;
    studyGuideComponentArray.push(component)
    studyGuideNames.push(guideName);

    routes.push(
      <Route 
        exact
        path={`${guideName}`} 
        element={component} 
        key={`route${guideName}`}
      />
    )
  }

  console.log('study guide array:', studyGuideComponentArray)
  console.log('study guide names:', studyGuideNames);
  //console.log('routes: ', routes);


 
  return(
    <div className="home">

      {/* <div id="study-guide">
        <StudyGuide categories={fakeData[0].categories}/>
      </div>
      */}
      
      {/* Should render a study guide below when clicking on a study guide on sidebar*/}
      
      {/* <SidebarRoutes 
        studyGuideNames={studyGuideNames} 
        studyGuideComponentArray={studyGuideComponentArray}
      /> */}
      <BrowserRouter>
      <div id="sidebar">
         <Sidebar 
          username={username}
          studyGuideNames={studyGuideNames}
         />
      </div>
        <Routes>
          {routes}
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}



export default Home;