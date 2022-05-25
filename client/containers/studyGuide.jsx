//container that shares space with the side bar
//will have the title of the study guide
//will have the category containers of that study guide
//will also have the addcategory component

import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AddCategory from '../components/addCategory';
import Category from './Category.jsx';

const fakeStudyGuide = 
    [
      {
        category: 'Arrays',
        questions: [
          {
            question: 'two sum',
            questionslug: 'two-sum',
            difficulty: 'hard',  
            notes: ''
          },
          {
            question: 'three sum',
            questionslug: 'three-sum',
            difficulty: 'easy',  
            notes: ''
          }
        ]
      },
      {
        category: 'BSTs',
        questions: [
          {
            question: 'maximum depth of binary tree',
            questionslug: 'maximum-depth-of-binary-tree',
            difficulty: 'easy',
            status: 'ac',
            notes: ''
          }
        ]
      }
    ]

const fakeStudyGuideMap = {
  "arrays": [
    {
      question: 'two sum',
      questionslug: 'two-sum',
      difficulty: 'hard',  
      notes: ''
    },
    {
      question: 'three sum',
      questionslug: 'three-sum',
      difficulty: 'easy',  
      notes: ''
    }
  ],
  "BSTs": [
    {
      question: 'maximum depth of binary tree',
      questionslug: 'maximum-depth-of-binary-tree',
      difficulty: 'easy',
      status: 'ac',
      notes: ''
    }
  ]
}
/*
props = {
  name: 'study-guide-1',
  categories: ['BSTs', 'Arrays']
}

*/

const StudyGuide = (props) => {
  //React hook to set state for categories, established as an array of categories
  const [studyGuide, setStudyGuide] = useState([]);//useState([]);
  //const [categories, setCategories] = useState(props.categories);
  const studyGuideName = props.name;
  const categories = props.categories;
  console.log('categories in this study guide: ', categories)

  //useEffect hook used to fetch to database for the categories associated with the user
  //will run when studyGuide is updated 
  useEffect(() => {
    fetchData();
  },[])

  /* HOW WE ARE EXPECTING THE DATA TO COME BACK FROM THE FETCH DATA QUERY?
  */
  //function to fetch study guide data from the server 
  async function fetchData(){
    //const response = await axios.get(`/api/studyguide/add/${studyGuideName}`); //ADD ENDPOINT TO FETCH FOR CATEGORIES HERE BASED ON STUDY GUIDE?
    //hoping to get object that looks like
    // [
    //   {
    //     category: 'Arrays',
    //     questions: [
    //       {
    //         question: 'two sum',
    //         questionslug: 'two-sum',
    //         difficulty: 'hard',  
    //         notes: ''
    //       },
    //       {
    //         question: 'three sum',
    //         questionslug: 'three-sum',
    //         difficulty: 'easy',  
    //         notes: ''
    //       }
    //     ]
    //   },
    //   {
    //     category: 'BSTs',
    //     questions: [
    //       {
    //         question: 'maximum depth of binary tree',
    //         questionslug: 'maximum-depth-of-binary-tree',
    //         difficulty: 'easy',
    //         status: 'ac',
    //         notes: ''
    //       }
    //     ]
    //   }
    // ]
    //setStudyGuide(response);

    setStudyGuide(fakeStudyGuide)
  } 
  
  //handling submit logic for categories
  //will also be sending the name of the study guide so it knows which study guide to belong to
  async function handleCategorySubmit(category){
    
    const response = await axios.post('/api/studyguide/category',{
      category: category,
      name: studyGuideName
    });
    //will look to get the same data as fetch data
    setStudyGuide(response);
  }

  //handling submit logic for questions
  //will also be sending the category name so it knows which category to belong to 
  async function handleQuestionSubmit(question, category){
    const response = await axios.post('/api/studyguide/question', {
      category: category,
      question: question
    })
    setStudyGuide(response);
  }

  console.log('study guide: ', studyGuide);
  //creating different categories to render based on the study guide 
  const categoryArray = [];
  const categoryLength = studyGuide.length;
  for (let i = 0; i < categoryLength; i++){
    categoryArray.push(
      <Category 
        category={studyGuide[i].category} 
        questions={studyGuide[i].questions}
        handleQuestionSubmit={handleQuestionSubmit} 
        key={`${studyGuide[i].category}i`}
      />
    )
  }

  return(
    <div className="study-guide">
      <h2 id="study-guide-title">{studyGuideName}</h2>
      {categoryArray}
      <AddCategory handleSubmit={handleCategorySubmit}/>
    </div>
  )
}

export default StudyGuide;
  
