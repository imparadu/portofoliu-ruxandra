import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Navigation = () => {
  return (
    <>
      <div className="logoContainer">
        <Link to="/">
          <img src="/Logo.svg" alt="" />
        </Link>
      </div>
      <div className="navigation">
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
      </div>
    </>
  );
};

export default Navigation;
