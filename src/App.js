import {useEffect, useState} from "react";
import MenuItem from "./components/MenuItem";
import axios from "axios";

function App() {
    const [dishes, setDishes] = useState([])
    const [categories, setCategories] = useState([])

    async function fetchCategories(){
        const response = await axios.get('http://127.0.0.1:8000/api/categories/?format=json')
        setCategories(response.data)
    }

    async function fetchDishes(){
        const response = await axios.get('http://127.0.0.1:8000/api/dishes/?format=json')
        setDishes(response.data)
    }
    useEffect(()=>{
        fetchCategories()
        fetchDishes()
    },[])
  return (
    <div className="App">
      <h1>ФронтЭнд</h1>
        {categories.map(category=>
            <h1 key={category.id}>{category.id} - {category.title}</h1>
        )}
        {dishes.map(dish=>
            <MenuItem dish={dish} key={dish.id}/>
        )}

    </div>
  );
}

export default App;
