import React from 'react';
import './project.css';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

function Project({ reference }) {
  return (
    <section id='project' className='project' ref={reference}>
        <div className="container">
          <SectionTitle title="Projects" subtitle="My Project Section" />
          <Hero />
        </div>
    </section>
  )
}

export default Project