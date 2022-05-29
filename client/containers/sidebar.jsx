/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Import MUI components
import {
  Box,
  Divider,
  Tooltip,
  Typography,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
// Import local components
import NewStudyGuideModal from './StudyGuideModal';
import LoginStatus from './LoginStatus';

// TODO: add props validation
export default function Sidebar({
  username,
  nodeId,
  avatarUrl,
  setUser,
  studyGuideNames,
}) {
  // state that will hold the names of study guides in the side bar currently
  const [studyGuides, setStudyGuides] = useState([]);

  // Handle logic for adding new study guides to the SQL database
  const handleModalSubmit = async (guideName, categories) => {
    const formattedGuideName = guideName.replace(/\s/g, '-');
    const newGuide = {
      userId: nodeId,
      name: formattedGuideName,
      categories,
    };
    console.log('this is the new study guide added:', newGuide);
    await axios.post('/api/studyguide/create', newGuide);
    setStudyGuides([...studyGuides, newGuide]);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log('studyguides in sidebar:', studyGuides);

  useEffect(() => {
    setStudyGuides(studyGuideNames);
  }, [studyGuideNames]);

  const studyGuideArray = [];
  const studyGuideLength = studyGuides.length;
  for (let i = 0; i < studyGuideLength; i += 1) {
    studyGuideArray.push(
      // <li key={`route${studyGuides[i]}`}>
      <Link
        key={`route${studyGuides[i]}`}
        to={`/${studyGuides[i]}`}
      >
        <Button
          variant="text"
        >
          {studyGuides[i]}
        </Button>
      </Link>,
      // </li>,
      /* <li key={`studyGuideSidebar${i}`}>
        <Button variant="text">{studyGuides[i]}</Button>
      </li> */
    );
  }

  return (
    <Box
      sx={{
        p: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '20%',
      }}
    >
      <Typography>
        Study Guides
      </Typography>
      <Divider orientation="horizontal" />
      <Box
        id="study-guides"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {studyGuideArray}
        <Tooltip title="Create a new study guide" arrow>
          <Button
            onClick={handleOpen}
            size="small"
            variant="contained"
          >
            <AddRoundedIcon />
          </Button>
        </Tooltip>
        <NewStudyGuideModal
          open={open}
          handleClose={handleClose}
          handleSubmit={handleModalSubmit}
        />
      </Box>
      <Divider orientation="horizontal" />
      <LoginStatus
        username={username}
        avatarUrl={avatarUrl}
        setUser={setUser}
      />
    </Box>
  );
}
