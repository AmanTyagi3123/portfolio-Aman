import React, { useState } from 'react';
import './hero.css';
import ProjectData from '../data/ProjectData';
import HeroSwiper from './HeroSwiper';
import SocialLinksItem from './SocialLinksItem';

function Hero() {
  const [items, setItems] = useState(ProjectData);
  const [activeItem, setActiveItem] = useState(items[0]); 

  const handleSlideChange = (id) => {
    const newItem = items.find((item) => item._id === id);
    if (newItem) {
      setActiveItem(newItem);
    }
  };

  return (
    <>
      <div className="banner">
        <div className="item" key={activeItem._id}>
          <img
            src={activeItem.bgImg}
            alt=""
            className="bgImg active"
          />
          <div className="content active">
            <p>{activeItem.subtitle}</p>
            <h1>{activeItem.title}</h1>
            <span className="social-links">
              <SocialLinksItem
                name="github"
                link="https://github.com/AmanTyagi3123"
              />
            </span>
          </div>
          <div className="subtitle mb-10">
            <span className="slogan">The Project</span>
          </div>
          <div className="subtitle">
            <span className="number active">#{activeItem._id}</span>
          </div>
        </div>
        {items && items.length > 0 && (
          <HeroSwiper slides={items} slideChange={handleSlideChange} />
        )}
      </div>
    </>
  );
}

export default Hero;