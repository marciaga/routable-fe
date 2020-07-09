import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/prioritizer">Prioritizer</Link>
      </li>
    </ul>
  </nav>
);