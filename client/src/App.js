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
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/homepage">
            <Header />
            <Recipe recipes={recipes} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
