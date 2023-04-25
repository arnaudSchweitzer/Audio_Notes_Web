import '../App.css';
import React, { useState } from 'react';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase-config';


function Login({setIsAuth}) {
    const auth = getAuth(app);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signUp = () => {

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert("Successfully created account")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            //const errorMessage = error.message;
            //
            alert(errorCode);
          });
    }

    const logIn = () => {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("This user has successfully loged in")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    //const errorMessage = error.message;
    alert(errorCode)
  });
    }

    return (
        <div className='signInPage'>
          <p>
            Hello Creator
          </p>
            <input type={"email"}placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type={"password"}placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>

            <button onClick={signUp}>Create account</button>
            <button onClick={logIn}>Log In</button>
        </div>
    );
}

export default Login;