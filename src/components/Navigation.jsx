import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>

<h1>Ruxandra Serbanoiu</h1>
    <nav>
      <ul>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/sketchbook">Sketchbook</Link>
        </li>
        <li>
          <a href="https://www.instagram.com/chocolatechiphelmet/ " target='blank'>Instagram</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navigation;
