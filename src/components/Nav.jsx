import React from 'react';
import './myStyle.css';

const Nav = () => (
  <div>
    <div className="nav">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/Calc">Calc</a>
        </li>
        <li>
          <a href="/Quote">Quote</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
