import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./users/pages/Users";
import NewRecipe from "./recipes/pages/NewRecipe";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/recipes/new" exact>
          <NewRecipe />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
