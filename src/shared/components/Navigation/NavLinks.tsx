import React from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

export default function NavLinks() {
  const authContext = React.useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {authContext.isLoggedIn && (
        <li>
          <NavLink to="/u1/recipes">MY RECIPES</NavLink>
        </li>
      )}
      {authContext.isLoggedIn && (
        <li>
          <NavLink to="/recipes/new">ADD RECIPE</NavLink>
        </li>
      )}
      {!authContext.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {authContext.isLoggedIn && (
        <li>
          <button onClick={authContext.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
}
