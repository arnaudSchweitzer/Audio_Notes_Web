import './App.css';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import {useState} from "react";
import{BrowserRouter as Router, Routes, Route, Link}from "react-router-dom";

function App() {
  return (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="create/">Create Post</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create" element={<CreatePost />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </Router>
    );
  }

export default App;
