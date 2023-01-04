

import { useState, useRef } from 'react';

import gt from "../Images/topics/messi.png";


import './category.css';

import Latest from './latest';
import Explore from './explore';


import sportPic from "../Images/topics/messi.png";
import motorPic from "../Images/topics/orange.png";
import kidPic from "../Images/topics/baby.png";
import moviePic from "../Images/topics/rock.png";


function Category(props) {


const TopicImages = [motorPic, motorPic, moviePic, sportPic,  motorPic, sportPic, moviePic]


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
      <div className="big-hero">
        <div className="hero"
        style={{background: `url(${TopicImages[props.id-1]})`}}
        >

          <div className="hero1">
            <h1>
              {props.desc}
            </h1>
            <p>
              {props.sub}
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
