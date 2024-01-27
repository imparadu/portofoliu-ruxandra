import React, { useRef , useEffect, useState } from 'react';
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
  
  console.log(scrollPosition)
  // const navRef = useRef();
  // useEffect(() => {
  //   if (navRef.current) {
  //     console.log(navRef.current);
      // function makeSticky() {
      //   if (window.scrollY >= navRef.current.scrollY) {
      //     navRef.current.classList.add('sticky');
      //   } else {
      //     navRef.current.classList.remove('sticky');
      //   }
      // }
      // makeSticky();
  //   }
  //   console.log(window.scrollY);
  // }, [navRef, window.scrollY, navRef?.current?.scrollY]);

  // window.onscroll = function () {
  //   makeSticky();
  // };

  // const navbar = document.getElementsByClassName('navigation');
  // const sticky = navbar.offsetTop;

  return (
    <div>
      <div className="logoContainer">
        <Link to="/">
          <h1 className="logo">Ruxandra Serbanoiu</h1>
        </Link>
      </div>
      <div className="navigation" >
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
    </div>
  );
};

export default Navigation;
