import '../App.css';
import React, { useState } from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase-config';
import {auth, db} from '../firebase-config';
import {useNavigate} from "react-router-dom";
import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 

let userName = '';

function CreateAcc({setIsAuth}) {

    let navigate = useNavigate();

    const auth = getAuth(app);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const signUp = () => {

        createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            const usersRef = collection(db, "Users");
            await setDoc(doc(usersRef, user.uid), {
              Name: name,
              Status: "CREATOR",
              });
              localStorage.setItem("isAuth", true);
                          
            const docRef = doc(db, 'Users', user.uid);
            const docSnap = await getDoc(docRef);
            userName = docSnap.get('Name');
            alert(userName);
              setIsAuth(true);
              navigate("/create");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            //const errorMessage = error.message;
            //
            alert(errorCode);
          });
    }

    return (
        <div className='loginPage'>
          <div className='cpContainer'>
            <h1>
              Create your Account
            </h1>
              <input type={"name"}placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
              <input type={"email"}placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
              <input type={"password"}placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
  
              <button onClick={signUp}>Create account</button>
          </div>
          </div>
      );

}

export default CreateAcc;