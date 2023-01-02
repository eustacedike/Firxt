
import '../layout.css';

import { useState } from 'react';

import { Link } from 'react-router-dom';


import { FaBolt, FaChevronDown, FaSearch, FaPenFancy, FaClock } from 'react-icons/fa';
import {ImFire} from 'react-icons/im';
import {BsUiChecksGrid} from 'react-icons/bs';



function Navigation() {

  const [whitenav, setWhitenav] = useState(false);
  const [mobile, setMobile] = useState(false);

  const openMobile = () => {
    setMobile(value => !value)
  }


  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 10) {
      setWhitenav(true)
    } else {
      setWhitenav(false)
    }
  })

const linkStyle = {
  textDecoration: "none",
  color: "unset"
}

  return (

    <header>
    <div className="Navigation"
    style={{backgroundColor: whitenav? "white" : "",
    boxShadow: whitenav? "0px 2px 13px grey" : ""}}
    >
     <Link to="/" style={linkStyle}><h2 className='logo'><FaBolt />Firxt</h2></Link> 

      <nav>
      <button className='write'><Link to="/write" style={linkStyle}><span>Post</span><FaPenFancy/></Link></button>
        <ul>


          <li><FaClock/> <Link to="/" style={linkStyle}>Latest</Link></li>
          <li><ImFire/> <Link to="/" style={linkStyle}>Hottest</Link></li>
          <li><BsUiChecksGrid/> <Link to="/" style={linkStyle}>Categories</Link> 
            <span> <FaChevronDown /></span>
            <div className="categories">
              <ul>
                <li><Link to="/" style={linkStyle}>Sports</Link></li>
                <li><Link to="/" style={linkStyle}>Food</Link></li>
                <li><Link to="/" style={linkStyle}>Romance</Link></li>
                <li><Link to="/" style={linkStyle}>Music</Link></li>
                <li><Link to="/" style={linkStyle}>Movies</Link></li>
                <li><Link to="/" style={linkStyle}>more...</Link></li>
              </ul>
            </div>
            </li>

        </ul>
        <div className="auth">
        <Link to="/login" style={linkStyle}><button>Login</button></Link>
        <Link to="/register" style={linkStyle}><button>Sign Up</button></Link>
        </div>
        <div className="search">
          <input type="search" name="" id="" placeholder='Search...' />
          <FaSearch />
        </div>
      </nav>

      <div className= {mobile?"menu change":"menu"}
      onClick={openMobile}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div className="menu-content"
         style={{transform: mobile? "translateX(0%)" : "translateX(100%)"}}
    >
    
        
        <ul>


          <li><Link to="/" style={linkStyle}>Latest</Link></li>
          <li><Link to="/" style={linkStyle}>Hottest</Link></li>
          <li><Link to="/" style={linkStyle}>Categories</Link></li>

        </ul>
        <div>
        <Link to="/login" style={linkStyle}><button>Login</button></Link> <br/>
          <Link to="/register" style={linkStyle}><button>Sign Up</button></Link>
        </div>
      
    </div>
    </header>
  );
}

export default Navigation;
