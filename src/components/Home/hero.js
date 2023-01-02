


import { Link } from 'react-router-dom';

import './home.css';

function Hero() {


    const linkStyle = {
        textDecoration: "none",
        color: "unset"
      }


  return (
    
      <div className="hero">

<div className="hero1">
        <h1>
            Share your thoughts Firxt!
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos quasi odit, quo earum natus nisi iste.
        </p>

        <button>
        <Link style={linkStyle} to="/write"> Write a Blog</Link>
        </button></div>
      </div>
    
  );
}

export default Hero;
