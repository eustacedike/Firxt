

import { Link } from 'react-router-dom';

import './topics.css';

import categories from "../categories.json";

import messi from "../Category/assets/messi.png";
// import hot from "./assets/hot.png";

function Topics() {

    const linkStyle = {
        textDecoration: "none",
        color: "unset"
      }
  return (
    <div className="Topics">
   <div className='topic-hero'>
        <h1>HOT TOPICS</h1>
        {/* <img src={hot}/> */}
      </div>
      
<div className='big-tops'>
      <div className='tops'>

      
      {
      Object.keys(categories.cats).map(key =>
        <div className='topic'> <Link onClick={()=>{window.scroll(0,0)}} to={`/blog/${categories.cats[key].name}`} style={linkStyle}><img src={messi}/><p>{categories.cats[key].name}</p></Link></div>)
    }
    </div>

    <div className='tops-2'>

    <h2>Popular Hashtags</h2>

    {categories.tags.map(tag => {
          return (
            <button> <Link to="/" style={linkStyle}>#{tag}</Link></button>
          )
        })}
    </div>
    </div>
    </div>
  );
}

export default Topics;
