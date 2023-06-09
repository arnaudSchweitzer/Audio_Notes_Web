import './App.css';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import CreateAcc from "./pages/CreateAcc";
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
      window.location.pathname  = "/";
    });
  };

  return (
  <Router>
    <nav>
    {!isAuth ? (<Link to="/">Login</Link>):(<button onClick={signUserOut}>Log Out</button>)}
      <Link to="/createAcc">Create Account</Link>
      
    </nav>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/create" element={<CreatePost />}/>
      <Route path="/" element={<Login setIsAuth={setIsAuth}/>}/>
      <Route path="/createAcc" element={<CreateAcc setIsAuth={setIsAuth}/>}/>
    </Routes>
    </Router>
    );
  }

export default App;
