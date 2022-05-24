//container that shares space with the side bar
//will have the title of the study guide
//will have the category containers of that study guide
//will also have the addcategory component

import axios from 'axios';
import React from 'react';
import AddCategory from '../components/addCategory';
import Category from './category.jsx';

const StudyGuide = (props) => {
  //React hook to set state for categories, established as an array of categories
  const [studyGuide, setStudyGuide] = useState([]);
  const studyGuideName = props.name;
  //console.log('clicked here');
  

  //useEffect hook used to fetch to database for the categories associated with the user
  useEffect(() => {
    fetchData();
  },[])

  /* HOW WE ARE EXPECTING THE DATA TO COME BACK FROM THE FETCH DATA QUERY
  [
    {
      category: 
      questions: [
        {
        question: question name
        questionslug: question slug 
        difficulty: difficulty  
        notes: notes to add
        }
      ]
    }
  ]
  */

  async function fetchData(){
    const response = await axios.get('/api/studyGuide'); //ADD ENDPOINT TO FETCH FOR CATEGORIES HERE BASED ON STUDY GUIDE?
    setStudyGuide(response);
  } 
  
  //need handle submit logic for adding categories
  async function handleCategorySubmit(category){
    const response = await axios.post('/api/studyGuide/category',{
      category,
      studyGuide: studyGuideName
    });
    setStudyGuide(response);
  }

  async function handleQuestionSubmit(question, category){
    const response = await axios.post('/api/studyGuide/question', {
      category: category,
      question: question
    })
    setStudyGuide(response);
  }

  //creating different categories to render based on the study guide 
  const categoryArray = [];
  const categoryLength = studyGuide.length;
  for (let i = 0; i < categoryLength; i++){
    categoryArray.push(
      <Category 
        category={studyGuide[i].category} 
        questions={studyGuide[i].questions}
        handleSubmit={handleQuestionSubmit} 
        key={`${categories[i]}i`}
      />
    )
  }

  return(
    <div className="study-guide">
      <h2>{studyGuideName}</h2>
      {categoryArray}
      <AddCategory handleSubmit={handleCategorySubmit}/>
    </div>
  )
}

export default StudyGuide;
  
