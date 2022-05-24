import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


const SidebarRoutes = (props) => {

  const studyGuideNames = props.studyGuideNames;
  const studyGuideComponentArray = props.studyGuideComponentArray;

  const routes = [];

  for (let i = 0; i < studyGuideNames.length; i++){
    routes.push(
      <Route path={studyGuideNames[i]} element={studyGuideComponentArray[i]} key={`${studyGuideNames[i]}i`}/>
    )
  }

  return(
    <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
  )
}

export default SidebarRoutes;