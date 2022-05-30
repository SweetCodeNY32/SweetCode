import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// Import MUI components
import { Box, Divider } from '@mui/material';
// Import local components
import Sidebar from './Sidebar';
import StudyGuide from './StudyGuide';

/*
what are we expecting from this fetchData?
*/
const fakeData = [
  {
    name: 'study-guide-1',
    categories: ['BSTs', 'Arrays'],
  },
  {
    name: 'study-guide-2',
    categories: ['matrices', 'dynamic programming'],
  },
];

// TODO: add props validation
// eslint-disable-next-line react/prop-types
export default function HomePage({ username, nodeId, avatarUrl, setUser }) {
  const [studyGuides, setStudyGuides] = useState(fakeData);

  // TODO: rather than use hard-coded dummy data, fetch data from the database
  // eslint-disable-next-line no-unused-vars
  async function fetchData() {
    // let response = await axios.post('/api/studyguide', {
    //   userId
    // });
    // setStudyGuides(response);
    setStudyGuides(fakeData);
  }

  /**
   * Update study guides.
   * Wille have useEffect logic to make fetch request to server for all of the
   * study guides associated with the user.
   */
  // useEffect(() => {
  //   // Getting study guides from studyguides endpoint
  //   // Expect response to be an array of objects:
  //   // [
  //   //   {
  //   //     name:
  //   //     categories: []
  //   //   }
  //   // ]
  //   fetchData();
  // }, []);

  // iterating through the length of studyGuides
  // creating an array of studyGuide objects and array of studyGuide names
  const studyGuideLength = studyGuides.length;
  const studyGuideComponentArray = [];
  const studyGuideNames = [];
  const routes = [];
  for (let i = 0; i < studyGuideLength; i += 1) {
    const guideName = studyGuides[i].name;
    const guideCategories = studyGuides[i].categories;
    const component = <StudyGuide name={guideName} categories={guideCategories} nodeId={nodeId} key={`studyguide${i}`} />;
    studyGuideComponentArray.push(component);
    studyGuideNames.push(guideName);

    routes.push(
      <Route
        exact
        path={`${guideName}`}
        element={component}
        key={`route${guideName}`}
      />,
    );
  }

  return (
    <Box
      id="homepage"
      sx={{
        display: 'flex',
        height: '100%',
      }}
    >
      <BrowserRouter>
        <Sidebar
          username={username}
          nodeId={nodeId}
          avatarUrl={avatarUrl}
          setUser={setUser}
          studyGuideNames={studyGuideNames}
        />
        <Divider orientation="vertical" />
        <Box
          id="study-guides"
          sx={{
            width: '80%',
            height: '100%',
          }}
        >
          <Routes>
            {routes}
          </Routes>
        </Box>
      </BrowserRouter>
    </Box>
  );
}
