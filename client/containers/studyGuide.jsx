//container that shares space with the side bar
//will have the title of the study guide
//will have the category containers of that study guide
//will also have the addcategory component

import React from 'react';
import AddCategory from '../components/addCategory';

const StudyGuide = (props) => {
  //React hook to set state for categories, established as an array of categories
  const [categories, setCategories] = useState(props.categories);

  //useEffect hook used to fetch to database for the categories associated with the user
  useEffect(async () => {
    let fetchedCategories = await axios.get('') //ADD ENDPOINT TO FETCH FOR CATEGORIES HERE
    setCategories(fetchedCategories);
  },[])

  //need handle submit logic for adding categories
  async function handleSubmit(){
    
  }

  return(
    <div className="study-guide">



      <AddCategory />
    </div>
  )

}

export default StudyGuide;
  
