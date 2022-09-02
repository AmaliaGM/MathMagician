import React from 'react';
import './myStyle.css';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div>
    <div className="nav">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/calc">Calc</NavLink>
        </li>
        <li>
          <NavLink to="/quote">Quote</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
