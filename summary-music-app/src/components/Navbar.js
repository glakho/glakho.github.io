import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/summary" className={({ isActive }) => (isActive ? 'active' : '')}>
            Summary
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" className={({ isActive }) => (isActive ? 'active' : '')}>
            Music
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
