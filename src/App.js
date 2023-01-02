
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/Home/home";
import Layout from "./components/Layout/layout";
import Post from "./components/Post/post";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Reader from "./components/Reader/reader";

import './App.css';

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
          <Route path="blog" element={<Reader />} />
          
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
