import React, { useState } from 'react'
import './hero.css'
import ProjectData from '../data/ProjectData'
import HeroSwiper from './HeroSwiper';
import SocialLinksItem from './SocialLinksItem';

function Hero() {

  const [items, setItems] = useState(ProjectData)

  const handleSlideChange= id=>{
    const newItems = items.map(item=>{
        item.active = false;
        if(item._id===id){
            item.active = true;
        }
        return item;
    });
    setItems(newItems);
  };

  return (
    <> 
            <div className="banner">
            {
              
                items && items.length >0 && items.map(item=>(
                    <div className="item" key={item._id}>
                    <img src={item.bgImg} alt="" className={`bgImg ${item.active ? "active": undefined}`} />
                    <div className={`content ${item.active ? "active": undefined}`}>    
                        <p>
                            {item.subtitle}
                        </p>
                        <h1>
                            {item.title}
                        </h1>
                        <span className="social-links">
                        <SocialLinksItem name='github' link='https://github.com/AmanTyagi3123'/>
                        </span>
                    </div>
                    <div className="subtitle mb-10"><span className="slogan">The Project</span></div>
                    <div className="subtitle">
                        <span className={`number ${item.active ? "active": undefined}`}>#{item._id}</span>
                    </div>
                </div>
                ))
            }

            {items && items.length>0 && (<HeroSwiper slides={items} slideChange={handleSlideChange} />)}
        </div>
        </>
  )
}

export default Hero