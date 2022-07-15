import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Recipe from './Recipe';
import Header from './Header'
import UserRecipe from './UserRecipe';
import UserRecipeDetail from './UserRecipeDetail'
import Profile from './Profile'
import LandingPage from './LandingPage';
import EditProfile from './EditProfile';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [cuisines, setCuisines] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [user, setUser] = useState(null)
  const [searchRecipes, setSearchRecipes] = useState("")
  const [users, setUsers] = useState([])
  const [likes, setLikes] = useState([])

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
  }, [users]);

  useEffect(() => {
    fetch("/cuisines")
      .then((r) => r.json())
      .then((data) => setCuisines(data));
  }, []);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then((data) => setRecipes(data));
  }, [])

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, [])

  if (!user) {
    return <LandingPage isAuthenticated={isAuthenticated} setUser={setUser} user={user} setIsAuthenticated={setIsAuthenticated} />
  }

  const handleNewUserRecipe = (data) => {
    setRecipes([...recipes, data])
  }

  const handleUpdatedRecipe = (data) => {
    let updatedRecipes = recipes.filter(recipe => recipe.id !== data.id)
    updatedRecipes.push(data)
    setRecipes(updatedRecipes)
  }

  const handleEditUser = (data) => {
    let editedUsers = users.filter(user => user.id !== data.id)
    editedUsers.push(data)
    setUsers(editedUsers)
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
              recipes={recipesToDisplay}
              user={user}
              handleNewUserRecipe={handleNewUserRecipe}
              cuisines={cuisines}
              handleSearchRecipes={handleSearchRecipes}
              searchRecipes={searchRecipes}
            />
          </Route>
          <Route exact path="/">
            <Header user={user} setUser={setUser} />
            <Recipe
              recipes={recipes}
              arrayOfUsers={users}
              user={user} cuisines={cuisines}
              searchRecipes={searchRecipes} />
          </Route>
          <Route path="/recipes/:id">
            <Header user={user} setUser={setUser} />
            <UserRecipeDetail
              recipes={recipes}
              user={user}
              handleUpdatedRecipe={handleUpdatedRecipe} />
          </Route>
          <Route path='/profile'>
            <Header user={user} setUser={setUser} />
            <Profile setUser={setUser} user={user} recipes={recipes} likes={likes} setLikes={setLikes} />
          </Route>
          <Route path='/editprofile'>
            <Header user={user} setUser={setUser} />
            <EditProfile handleEditUser={handleEditUser} user={user} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
