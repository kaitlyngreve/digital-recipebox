import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Recipe from './Recipe';
import Header from './Header'
import UserRecipe from './UserRecipe';
import UserRecipeDetail from './UserRecipeDetail'
import Liked from './Liked'
import LandingPage from './LandingPage';
import Login from './Login'

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cuisines, setCuisines] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [user, setUser] = useState(null)
  const [searchRecipes, setSearchRecipes] = useState("")
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/me')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((user) => {
              setIsAuthenticated(true);
              setUser(user);
            });
        }
      });
  }, []);

  useEffect(() => {
    fetch("/cuisines")
      .then((r) => r.json())
      .then((data) => setCuisines(data));
  }, [user]);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then((data) => setRecipes(data));
  }, [])

  if (!user) {
    return <LandingPage isAuthenticated={isAuthenticated} setUser={setUser} user={user} setIsAuthenticated={setIsAuthenticated} />
  }

  const handleNewUserRecipe = (data) => {
    setRecipes([...recipes, data])
  }


  const handleDeleteUserRecipe = (resp) => {
    console.log(resp)
    let filteredResp = recipes.filter(userRecipe => userRecipe.id !== resp.id)
    setRecipes(filteredResp)
  }

  const handleSearchRecipes = (e) => {
    setSearchRecipes(e.target.value)
  }

  let recipesToDisplay = recipes.filter((recipe) => {
    return recipe.title.toLowerCase().includes(searchRecipes.toLowerCase())
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/myrecipes">
            <Header user={user} setUser={setUser} />
            <UserRecipe
              handleDeleteUserRecipe={handleDeleteUserRecipe}
              recipes={recipes}
              user={user}
              handleNewUserRecipe={handleNewUserRecipe}
              cuisines={cuisines} />
          </Route>
          <Route exact path="/">
            <Header user={user} setUser={setUser} />
            <Recipe
              recipes={recipesToDisplay}
              arrayOfUsers={users}
              user={user} cuisines={cuisines}
              handleSearchRecipes={handleSearchRecipes}
              searchRecipes={searchRecipes} />
          </Route>
          <Route path="/recipes/:id">
            <Header user={user} setUser={setUser} />
            <UserRecipeDetail
              recipes={recipes}
              user={user} />
          </Route>
          <Route path='/likes'>
            <Header user={user} setUser={setUser} />
            <Liked user={user} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
