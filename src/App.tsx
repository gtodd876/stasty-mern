import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Users from './users/pages/Users';
import NewRecipe from './recipes/pages/NewRecipe';
import UserRecipes from './recipes/pages/UserRecipes';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdateRecipe from './recipes/pages/UpdateRecipe';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/recipes">
            <UserRecipes />
          </Route>
          <Route path="/recipes/new" exact>
            <NewRecipe />
          </Route>
          <Route path="/recipes/:recipeId">
            <UpdateRecipe />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
