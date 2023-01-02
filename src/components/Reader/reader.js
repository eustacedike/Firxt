

import { Link } from 'react-router-dom';


import './reader.css';

import { FaExclamationCircle, FaChevronRight, FaClock, FaCalendarAlt, FaBook, FaRegThumbsUp, FaRegThumbsDown, FaBookmark } from 'react-icons/fa';



import dp from "../Home/assets/bg17.png";


function Reader() {


    const thisPost =
    {
        title: "Metalogy X Global Ambassador Program",
        category: "Tech",
        author: "Eustace Dike",
        authordp: dp,
        date: "Jan 01, 2023",
        read: 5,
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam aliquam consequatur asperiores magni impedit debitis maiores nulla sequi ut delectus esse magnam vitae obcaecati totam itaque maxime, laboriosam accusantium ullam? Modi, voluptate ipsum. What’s the Metalogy X Ambassadors Program? This Ambassadors Program is created by/for individuals that are enthusiastic about all-things Web3 and are willing to help the Metalogy X's community grow.."

    };

    const linkStyle = {
        textDecoration: "none",
        color: "unset"
    }

    return (
        <div className="Reader">

            <h1>
                {/* <FaClock style={{verticalAlign: "-4.5px"}}/> */}
                {thisPost.title}</h1>






            <div className="post-details">
                <div className="author">
                    <img src={thisPost.authordp} alt="eustace" />
                    <h4>{thisPost.author}</h4>
                </div>

                <h5><FaCalendarAlt /> {thisPost.date}</h5>
                <h5><FaClock /> {thisPost.read} min read</h5>
            </div>
            <p className='main-post'>
                {thisPost.post}
            </p>

            <div className="cat-act">
                <button>{thisPost.category}</button>
                <div className="post-actions">
                    <p>{126} <FaRegThumbsUp /></p>
                    <p>{7}<FaRegThumbsDown /></p>
                    <p><FaBookmark /></p>
                    <p><FaExclamationCircle /></p>
                </div>
            </div>

            <br /> <br />

            <form action="">
                <input type="text" /> <br/>
                <button>Comment</button>
            </form>

            <br /> <br />

            <h3>Replies</h3>

            <div className="replies">
                <div className="reply">
                    <div className="post-details">
                        <div className="author">
                            <img src={thisPost.authordp} alt="eustace" />
                            <h4>{thisPost.author}</h4>
                        </div>

                        <h5><FaCalendarAlt /> {thisPost.date}</h5>
                    </div>
                    <div className="the-reply">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, ratione nisi!
                        </p>
                    </div>
                </div>
                <div className="reply">
                    <div className="post-details">
                        <div className="author">
                            <img src={thisPost.authordp} alt="eustace" />
                            <h4>{thisPost.author}</h4>
                        </div>

                        <h5><FaCalendarAlt /> {thisPost.date}</h5>
                    </div>
                    <div className="the-reply">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, ratione nisi!
                        </p>
                    </div>
                </div>
                <div className="reply">
                    <div className="post-details">
                        <div className="author">
                            <img src={thisPost.authordp} alt="eustace" />
                            <h4>{thisPost.author}</h4>
                        </div>

                        <h5><FaCalendarAlt /> {thisPost.date}</h5>
                    </div>
                    <div className="the-reply">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, ratione nisi!
                        </p>
                    </div>
                </div>
            </div>





        </div>
    );
}

export default Reader;
