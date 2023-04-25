import React, { useState } from 'react';
import {auth, provider, email, password, user} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

function SignIn({setIsAuth}) {
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
            <input type={"email"}placeholder="Please enter your email" onChange={(e)=>setEmail(e.target.value)}/>
            <input type={"password"}placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>

            <button onClick={signUp}>Create account</button>
            <button>Already have an account ? Log In !</button>
        </div>
    );
}

export default SignIn;