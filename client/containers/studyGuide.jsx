//container that shares space with the side bar
//will have the title of the study guide
//will have the category containers of that study guide
//will also have the addcategory component


  //React hook to set state for categories, established as an array of categories
  const [categories, setCategories] = useState([]);

  //useEffect hook used to fetch to database for the categories associated with the user
  useEffect(() => {
    let fetchedCategories = axios.get('') //ADD ENDPOINT TO FETCH FOR CATEGORIES HERE
    setCategories(fetchedCategories);
  }, [])
