/* eslint-disable react/prop-types */
// component used to add categories to the study guide
// will have imput field and add category button

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AddCategory({ handleSubmit }) {
  const [category, setCategory] = useState('');

  return (
    <div className="add-category">
      <TextField
        className="category-text"
        size="small"
        variant="outlined"
        label="Add a new category"
        onChange={(e) => setCategory(e.target.value)}
      >
        {category}
      </TextField>
      <Button
        className="category-button"
        variant="outlined"
        onClick={() => handleSubmit(category)}
      >
        Add Category
      </Button>
    </div>
  );
}
