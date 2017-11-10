import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
    <NavLink exact to="/create" activeClassName="is-active">Create</NavLink>
    <NavLink exact to="/edit" activeClassName="is-active">Edit</NavLink>
  </header>
);

export default Header;