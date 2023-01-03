
import '../layout.css';

import { useState, useRef } from 'react';

import { Link } from 'react-router-dom';


import { FaBolt, FaChevronDown, FaSearch, FaPenFancy, FaClock } from 'react-icons/fa';
import {ImFire} from 'react-icons/im';
import {BsUiChecksGrid} from 'react-icons/bs';



function Navigation() {

  const [whitenav, setWhitenav] = useState(false);
  const [mobile, setMobile] = useState(false);

  const menuCon = useRef();

  const openMobile = () => {
    setMobile(value => !value)
  }

  const takeUp = () => {
    window.scroll(0,0)
  }

  

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 10) {
      setWhitenav(true)
    } else {
      setWhitenav(false)
    }
  })

  window.onclick = (event) => {

    if (!event.target.closest(".menu")){
      setMobile(false);
      
      }
    
  }


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
     <Link onClick={takeUp} to="/" style={linkStyle}><h2 className='logo'><FaBolt />Firxt</h2></Link> 

      <nav>
      <button className='write'><Link to="/write" style={linkStyle}><span>Post</span><FaPenFancy/></Link></button>
        <ul>


          <li><FaClock/> <Link to="/blogposts" style={linkStyle}>Latest</Link></li>
          <li><ImFire/> <Link to="/trending" style={linkStyle}>Hottest</Link></li>
          <li><BsUiChecksGrid/> <Link to="/categories" style={linkStyle}>Categories</Link> 
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
      ref={menuCon}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <div className="menu-content"
         style={{transform: mobile? "translateX(0%)" : "translateX(100%)"}}
    ref={menuCon}
    
    >
    
        
        <ul>

       <li> <button className='write'><Link onClick={takeUp} to="/write" style={linkStyle}><span>Post</span><FaPenFancy/></Link></button>
</li>
<li><FaClock/> <Link onClick={takeUp} to="/blogposts" style={linkStyle}>Latest</Link></li>
          <li><ImFire/> <Link onClick={takeUp} to="/trending" style={linkStyle}>Hottest</Link></li>
          <li><BsUiChecksGrid/> <Link onClick={takeUp} to="/categories" style={linkStyle}>Categories</Link> </li>

        </ul>
        <div>
        <Link onClick={takeUp} to="/login" style={linkStyle}><button>Login</button></Link> <br/>
          <Link onClick={takeUp} to="/register" style={linkStyle}><button>Sign Up</button></Link>
        </div>
      
    </div>
    </header>
  );
}

export default Navigation;
