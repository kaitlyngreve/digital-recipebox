import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Recipe from './Recipe';
import Header from './Header'

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((r) => r.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/recipes">
            <h1>Test Route</h1>
          </Route>
          <Route path="/homepage">
            <Recipe recipes={recipes} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
