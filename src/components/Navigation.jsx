import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Navigation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once during mount and unmount


  return (
    <>
      <div className="logoContainer">
        <Link to="/">
          <h1 className="logo">Ruxandra Serbanoiu</h1>
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
