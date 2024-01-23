import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Navigation = () => {
  return (
    <div>
      <Link to="/">
        <h1 className='logo'>Ruxandra Serbanoiu</h1>
      </Link>
      <nav className='navigation'>
        <ul>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/sketchbook">Sketchbook</Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/chocolatechiphelmet/ "
              target="blank"
            >
              Instagram
            </a>
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
