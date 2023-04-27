import './App.css';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import {useState} from "react";
import{BrowserRouter as Router, Routes, Route, Link, useNavigate}from "react-router-dom";
import {signOut} from 'firebase/auth'
import {auth} from './firebase-config'

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname  = "/login";
    });
  };

  return (
  <Router>
    <nav>
      <Link to="/">Home</Link>     
      <Link to="create/">Create Post</Link>
      {!isAuth ? (<Link to="/login">Login</Link>):(<button onClick={signUserOut}>Log Out</button>)}
    </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create" element={<CreatePost />}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
    </Routes>
    </Router>
    );
  }

export default App;
