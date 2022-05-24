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
      status: 'ac' or something
      notes: notes to add
    }
  ]
}

*/

const Category = (props) => {
  //variable to hold the value of the category name
  let categoryName = props.category;
  let questionsObject = props.questions;
  
  //logic for addquestion submit logic
  async function handleQuestionSubmit(question){
    let newQuestion = await axios.post('',
      {
        category: categoryName,
        question: question
      }
    );
  }

  //logic for saveNotes logic 
  // async function handleNoteSubmit(note, questionKey){
  //   let targetQuestion = questionKey;



  // }

  //logic for loading on change 


  //loop to iterate through the questions associated with this category
  let questions = [];
  let questionsLength = questionsObject.length;
  for (let i = 0; i < questionsLength; i++){
    questions.push(
      <Question 
        {...props.question[i]} 
        //handleNoteSubmit={handleNoteSubmit}
        key={`${categoryName}question${i}`}
        id={`${categoryName}question${i}`}
      />
    )
  }

  return(
    <div className="category">
      <h2 className="category-title">{categoryName}</h2>
      <div className="questions">{questions}</div>
      <AddQuestion handleQuestionSubmit={handleQuestionSubmit} />
    </div>
  )
}


export default Category;