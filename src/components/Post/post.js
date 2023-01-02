
import categories from "../categories.json";


import './post.css';

import { FaRegImage } from 'react-icons/fa';

function Post() {
  return (
    <div className="Post">
      <h1>Post A Blog</h1>
      <form>
        <input className='title' type="text" placeholder='Title' /> <br />
        <select name="" id="">
        <option value="">Category</option>
        {categories.categories.map(category => {
          return (
            <option value="">{category}</option>
          )
        })}
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
