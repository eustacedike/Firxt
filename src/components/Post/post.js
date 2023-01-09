
import categories from "../categories.json";


import './post.css';

import { FaRegImage } from 'react-icons/fa';

function Post() {

  const sorted = Object.keys(categories.cats)
    .sort()
    .reduce(function (acc, key) { 
        acc[key] = categories.cats[key];
        return acc;
    }, {});

  return (
    <div className="Post">
      <h1>Post A Blog</h1>
      <form>
        <input className='title' type="text" placeholder='Title' /> <br />
        <select name="" id="">
        <option value="">Category</option>
        {
      Object.keys(sorted).map(key =>
        <option value={sorted[key].name}>{sorted[key].name}</option>
        )
    }
        </select>
        <textarea name="" id="" cols="30" rows="10" placeholder='Body...'></textarea> <br />
        <label htmlFor="file"><FaRegImage/></label>
        <input type="file" name="file" id="file" /> <br />
        <hr />
        <button>Publish</button>

      </form>
    </div>
  );
}

export default Post;
