

import { useState, useRef } from 'react';


import './home.css';

import Hero from './hero';
import Latest from './latest';
import Trending from './trending';
import Explore from './explore';

function Home() {


  const [xplore, setXplore] = useState(false);
  // const homee = useRef();


 window.onscroll = () => {
    if (window.pageYOffset > 530) {
      setXplore(true)
    } else {
      setXplore(false)
    }
  }

  return (
    <div className="Home">
      <div className="big-hero" on>
        <Hero/>
      </div>
      
      <div className="posts-section">
        <Latest/>
        
        <Trending />
        
        
        
      </div>
      <div className="xplore"
      style={{position: xplore? "fixed" : "", top: xplore? "62px" : ""}}
      >
          <Explore/>
        </div>
    </div>
  );
}

export default Home;
