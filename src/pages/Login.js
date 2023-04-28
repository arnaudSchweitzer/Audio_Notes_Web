import '../App.css';
import React, { useState } from 'react';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase-config';
import {auth, db} from '../firebase-config';
import {useNavigate} from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore"; 

function Login({setIsAuth}) {

  let navigate = useNavigate();


    const auth = getAuth(app);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const signUp = () => {

    //     createUserWithEmailAndPassword(auth, email, password)
    //       .then(async (userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         console.log(user);
    //         alert("Successfully created account");
    //         const usersRef = collection(db, "Users");
    //         await setDoc(doc(usersRef, user.uid), {
    //           Name: "OUI",
    //           Status: "CREATOR",
    //           });
    //           localStorage.setItem("isAuth", true);
    //           setIsAuth(true);
    //           navigate("/");
    //         // ...
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         //const errorMessage = error.message;
    //         //
    //         alert(errorCode);
    //       });
    // }

    const logIn = () => {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("This user has successfully loged in");

    localStorage.setItem("isAuth", true);
    setIsAuth(true);
    navigate("/home");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    //const errorMessage = error.message;
    alert(errorCode)
  });

  

    }

    return (
      <div className='loginPage'>
        <div className='cpContainer'>
          <h1>
            Hello Creator
          </h1>
            <input type={"email"}placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type={"password"}placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>

            {/* <button onClick={signUp}>Create account</button> */}
            <button onClick={logIn}>Log In</button>
        </div>
        </div>
    );
}

export default Login;