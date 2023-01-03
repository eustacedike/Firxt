
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/Home/home";
import Layout from "./components/Layout/layout";
import Post from "./components/Post/post";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Reader from "./components/Reader/reader";
import AllPosts from "./components/AllPosts/allposts";
import Category from "./components/Category/category";

import './App.css';

import { FaClock } from "react-icons/fa";
import {ImFire} from 'react-icons/im';


function App() {
  return (
    <div className="App">
      
      <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="write" element={<Post />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="blog" element={<Reader/>} />
          <Route path="categories" element={<Category/>} />
          <Route path="blogposts" element={<AllPosts icon={<FaClock/>} latestOrtrending="RECENT POSTS" sub="Check out the most recent blogs on Firxt.." />} />
          <Route path="trending" element={<AllPosts icon={<ImFire/>} latestOrtrending="TRENDING NOW" sub="Hot topics right now..." />} />
          
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
