//category container
//will have the name of the category as the header
//will have a bunch of question components
//will also have the add question component 

import React, {useState, useEffect} from 'react';
import Question from '../components/question.jsx'
import AddQuestion from '../components/addQuestion.jsx'

/*
expecting props to be: 
{
  category: category name
  questions: [
    {
      question: question name
      questionslug: question slug 
      difficulty: difficulty  
      notes: notes to add
    }
  ]
}
*/

const Category = (props) => {
  //variable to hold the value of the category name
  let categoryName = props.category;
  let questionsArray = props.questions;
  
  //logic for loading on change 

  //loop to iterate through the questions associated with this category
  let questions = [];
  let questionsLength = questionsArray.length;
  for (let i = 0; i < questionsLength; i++){
    questions.push(
      <li key={`${categoryName}question${i}`}>
        <Question 
          {...questionsArray[i]}
          category={categoryName} 
          categoryIndex={props.categoryIndex}
          //handleNoteSubmit={handleNoteSubmit}
          id={`${categoryName}question${i}`}
        />
      </li>
    )
  }

  return(
    <div className="category">
      <h3 className="category-title">{categoryName}</h3>
      <ul className="questions">{questions}</ul>
      <AddQuestion category={categoryName} handleSubmit={props.handleQuestionSubmit} categoryIndex={props.categoryIndex}/>
    </div>
  )
}


export default Category;