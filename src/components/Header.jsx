import React, { useState, useEffect } from 'react';
import './header.css';
import NavListItem from './NavListItem';
import NavListData from '../data/NavListData';
import SocialLinksItem from './SocialLinksItem';

function Header({ reference, sectionActive, aboutActive }) {
  const [navList, setNavList] = useState(NavListData);
  const [header, setHeader] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through 0, 1, 2
    }, 1500); 

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const textOptions = ['Problem Solver', 'Competitive Programmer', 'Web Developer'];
  const currentText = textOptions[currentIndex];

  const handleNavOnClick = (id, tar) => {
    if (tar === 'header') {
      setHeader(false);
    } else {
      setHeader(true);
    }

    if (tar === 'about') {
      aboutActive(true);
    } else {
      aboutActive(false);
    }

    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav._id === id) {
        nav.active = true;
      }
      return nav;
    });
    setNavList(newNavList);
    sectionActive(tar);
  };

  return (
    <div>
      <header id="header" ref={reference} className={header ? 'header-top' : null}>
        <div className="container">
          <h1>
            <a href="/">Aman Tyagi</a>
          </h1>
          <h2>
            I'm a passionate <span>{currentText}</span>
          </h2>
          <nav id="navbar" className="navbar">
            <ul>
              {navList.map((item) => (
                <NavListItem key={item._id} item={item} navOnClick={handleNavOnClick} />
              ))}
            </ul>
          </nav>
          <div className="social-links">
            <SocialLinksItem
              name="linkedin"
              link="https://www.linkedin.com/in/aman-tyagi-677377270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            />
            <SocialLinksItem name="github" link="https://github.com/AmanTyagi3123" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
