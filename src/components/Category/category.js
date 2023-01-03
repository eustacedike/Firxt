

import { useState, useRef } from 'react';


import './category.css';

import Latest from './latest';
import Explore from './explore';

function Category() {


  const [xplore, setXplore] = useState(false);
  // const homee = useRef();


  window.onscroll = () => {
    if (window.pageYOffset > 252) {
      setXplore(true)
    } else {
      setXplore(false)
    }
  }


  return (
    <div className="Categx">
      <div className="big-hero" on>
        <div className="hero">

          <div className="hero1">
            <h1>
              SPORTS
            </h1>
            <p>
              Soccer, Basketball, Tennis, Baseball stories; and lots more!!!
            </p>


          </div>
        </div>
      </div>

      <div className="posts-section">
        <Latest />

    



      </div>
      <div className="xplore"
        style={{ position: xplore ? "fixed" : "", top: xplore ? "62px" : "" }}
      >
        <Explore />
      </div>
    </div>
  );
}

export default Category;
