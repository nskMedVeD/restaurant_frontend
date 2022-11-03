import {useEffect, useState} from "react";
import MenuItem from "./components/MenuItem";
import axios from "axios";
import {AuthContext} from "./context";
import "./styles/main.css"

function App() {
    const [dishes, setDishes] = useState([])

    async function fetchDishes(){
        const response = await axios.get('http://127.0.0.1:8000/api/dishes/?format=json')
        setDishes(response.data)
    }
    useEffect(()=>{
        fetchDishes()
    },[])

    const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
        isAuth,
        setIsAuth
    }}>
        <div className="App">
          <h1>Кирюшкина пельменная</h1>
            <div className="menu_cards_wrapper">
                {dishes.map(dish=>
                    <MenuItem dish={dish} key={dish.id}/>
                )}
            </div>

        </div>
    </AuthContext.Provider>
  );
}

export default App;
