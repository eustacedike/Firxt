
import './home.css';

import { FaHashtag,  } from 'react-icons/fa';
import {ImEarth} from 'react-icons/im';
import {BsUiChecksGrid} from 'react-icons/bs';



import dp from "./assets/bg17.png"


function Explore() {


  const posts = [
    { id: 1, title: "Metalogy X Global Ambassador Program", category: "Tech", author: "Eustace Dike", authordp: dp, date: "Jan 01, 2023", read: 5, post: "What’s the Metalogy X Ambassadors Program? This Ambassadors Program is created by/for individuals that are enthusiastic about all-things Web3 and are willing to help the Metalogy X's community grow.." },
    { id: 2, title: "Why you should care about p2p social", category: "Finance", author: "Uri Valeski", authordp: dp, date: "Dec 04, 2022", read: 10, post: "What’s the Metalogy X Ambassadors Program? This Ambassadors Program is created by/for individuals that are enthusiastic about all-things Web3 and are willing to help the Metalogy X's community grow.." },
    { id: 3, title: "Top ten best meals for breakfast", category: "Food", author: "Salt Bae", authordp: dp, date: "Sep 02, 2021", read: 2, post: "What’s the Metalogy X Ambassadors Program? This Ambassadors Program is created by/for individuals that are enthusiastic about all-things Web3 and are willing to help the Metalogy X's community grow.." },


  ]

  const categories = ["Automobiles", "Phones", "Movies", "Music", "Books", "Celebrity", "Sports", "Finance", "Crypto", "Tech", "Food"]
  const tags = ["twitter", "lagos", "election", "workout", "ronaldo", "burnaboy", "japa", "drake", "sales", "newyear"]

  return (
    <div className="Explore">
      
      <h1><ImEarth style={{verticalAlign: "-4.5px"}}/> EXPLORE</h1>

      <h2><BsUiChecksGrid/> Popular Categories</h2> 
      <div className="xplore-cats">
        
        {categories.map(categoryy => {
          return (
            <button>{categoryy}</button>
          )
        })}

        <p>Explore all categories</p>
      </div>

      <h2><FaHashtag/> Tags</h2> 
      <div className="xplore-cats">
        
        {tags.map(tag => {
          return (
            <button>#{tag}</button>
          )
        })}

<p>check out more tags</p>

      </div>
      
</div>
    
  );
}

export default Explore;
