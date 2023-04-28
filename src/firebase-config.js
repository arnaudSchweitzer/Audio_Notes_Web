// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore, query, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCoY6CsdL1Hcz2gGEC_xGaGSHYbGtfq4LM",
  authDomain: "audioapp-database.firebaseapp.com",
  projectId: "audioapp-database",
  storageBucket: "audioapp-database.appspot.com",
  messagingSenderId: "1026425725742",
  appId: "1:1026425725742:web:bd17e85cbb096d7b1e90bf",
  measurementId: "G-BMSBWRJDBB"
};


// Initialize Firebase


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);


export default app;