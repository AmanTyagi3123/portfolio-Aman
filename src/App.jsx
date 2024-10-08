// import Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
// import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Remix Icons
import 'remixicon/fonts/remixicon.css'
// import Boxicons
import 'boxicons/css/boxicons.min.css'

import React, { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {

  const [aboutActive, setAboutActive] = useState(false);

  const homeRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  const sections = [
    {
      name: 'header',
      ref: homeRef,
      active: true,
    },
    {
      name: 'about',
      ref: aboutRef,
      active: false,
    },
    {
      name: 'project',
      ref: projectRef,
      active: false,
    },
    {
      name: 'contact',
      ref: contactRef,
      active: false,
    },
  ]

  const handleSectionActive = tar => {
    sections.map(section=>{
      section.ref.current.classList.remove('section-show');
      if(section.ref.current.id===tar){
        section.ref.current.classList.add('section-show');
      }
      return section;
    });
  }

  return (
    <>
      <Header reference={homeRef} sectionActive={handleSectionActive} aboutActive={setAboutActive} />
      <About reference={aboutRef} aboutActive={aboutActive} />
      <Project reference={projectRef} />
      <Contact reference={contactRef} />
    </>
  )
}

export default App
