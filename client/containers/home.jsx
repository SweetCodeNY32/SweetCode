//will house the sidebar component and study guide container 

import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar.jsx';
import StudyGuide from './StudyGuide.jsx';
import Modal from './StudyGuideModal.jsx';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import axios from 'axios';

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

const Home = (props) => {
  const username = props.user.username;
  const nodeId = props.user.nodeId;

  const [studyGuides, setStudyGuides] = useState(fakeData);

  async function fetchData(){
    // let response = await axios.post('/api/studyguide', {
    //   userId
    // });
    // setStudyGuides(response);
    setStudyGuides(fakeData)
  }
  
  //will have useEffect logic to make fetch request to server for all of the study guides associated with this user 
  // useEffect(() => {
  //   //getting study guides from studyguides endpoint
  //   //expect response to be an array of objects:
  //   // [
  //   //   {
  //   //     name:
  //   //     categories: []
  //   //   }
  //   // ]
  //   fetchData();
    
  // }, []);

  //handle logic for adding new study guides 
  async function handleModalSubmit(guideName, categories){
    guideName = guideName.replace(/\s/g, '-');
    const newGuide = {
      name: guideName,
      categories: categories
    };

    //await axios.post('', newGuide)
    console.log('this is the new study guide added:', newGuide);
    //await axios.post('/api/studyguide/create', newGuide)
    setStudyGuides([...studyGuides, newGuide]);
  }
 
  //iterating through the length of studyGuides 
  //creating an array of studyGuide objects and array of studyGuide names 
  const studyGuideLength = studyGuides.length;
  const studyGuideComponentArray = [];
  const studyGuideNames = [];
  const routes = [];
  for (let i = 0; i < studyGuideLength; i++){

    let guideName = studyGuides[i].name;
    let categories = studyGuides[i].categories;
    let component = <StudyGuide name={guideName} categories={categories} nodeId={nodeId} key={`studyguide${i}`}/>;
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

  return(
    <div className="home">
      <BrowserRouter>
      <div id="sidebar-home">
         <Sidebar 
          username={username}
          studyGuideNames={studyGuideNames}
          handleModalSubmit={handleModalSubmit}
         />
      </div>
      <div id='study-guides-home'>
        <Routes>
          {routes}
        </Routes>
      </div>
      </BrowserRouter>
      {/* <Modal handleSubmit={handleModalSubmit}/> */}
    </div>
    
  )
}


export default Home;