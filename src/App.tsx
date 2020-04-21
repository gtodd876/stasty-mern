import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Users from './users/pages/Users';
import Auth from './users/pages/Auth';
import NewRecipe from './recipes/pages/NewRecipe';
import UserRecipes from './recipes/pages/UserRecipes';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdateRecipe from './recipes/pages/UpdateRecipe';
import { AuthContext } from './shared/context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = React.useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = React.useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
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
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/recipes">
          <UserRecipes />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
