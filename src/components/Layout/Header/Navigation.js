
import '../layout.css';

import { useState } from 'react';


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

  // window.onscroll = () => {
  //   if (window.pageYOffset > 10) {
  //     setWhitenav(true)
  //   } else {
  //     setWhitenav(false)
  //   }
  // }


  return (

    <header>
    <div className="Navigation"
    style={{backgroundColor: whitenav? "white" : "",
    boxShadow: whitenav? "0px 2px 13px grey" : ""}}
    >
      <h2 className='logo'><FaBolt />Firxt</h2>

      <nav>
        <button className='write'><span>Post</span><FaPenFancy/></button>
        <ul>


          <li><FaClock/> Latest</li>
          <li><ImFire/> Hottest</li>
          <li><BsUiChecksGrid/> Categories 
            <span> <FaChevronDown /></span>
            <div className="categories">
              <ul>
                <li>Sports</li>
                <li>Food</li>
                <li>Romance</li>
                <li>Music</li>
                <li>Movies</li>
                <li>more...</li>
              </ul>
            </div>
            </li>

        </ul>
        <div className="auth">
          <button>Login</button>
          <button>Sign Up</button>
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


          <li>Latest</li>
          <li>Hottest</li>
          <li>Categories 
            <span> <FaChevronDown /></span>
            <div className="categories">
              <ul>
                <li>Sports</li>
                <li>Food</li>
                <li>Romance</li>
                <li>Music</li>
                <li>Movies</li>
                <li>more...</li>
              </ul>
            </div>
            </li>

        </ul>
        <div>
          <button>Login</button> <br/>
          <button>Sign Up</button>
        </div>
      
    </div>
    </header>
  );
}

export default Navigation;
