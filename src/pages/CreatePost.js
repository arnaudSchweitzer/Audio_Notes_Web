import React, {useState} from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import {auth, db} from '../firebase-config';
import app from '../firebase-config';
import {collection, getFirestore, doc, setDoc, getDoc} from "firebase/firestore"; 
import userName from './Login.js';

function Post() {
const [title, setTitle] = useState("");
const [postText, setPostText] = useState("");
const [image, setImage] = useState("");
const [audio, setAudio] = useState("");
const [selectedOption, setSelectedOption]=useState("");
const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


const upload = async () => {
    
    alert(userName);

    // const storage = getStorage();
    // const storageRef = ref(storage, 'images/' + title);
    // const uploadTask = uploadBytes(storageRef, image);
    
    
    // const storageAudioRef = ref(storage, 'audios/' + title);
    // const uploadAudioTask = uploadBytes(storageAudioRef, audio);

    // const audiosRef = collection(db, "Audios");
    //         await setDoc(doc(audiosRef, title), {
    //           Name: title,
    //           Description: postText,
    //           Likes: 0,
    //           Reports: 0,
    //           Author: 'userName',
    //           Playlists: selectedOption,
    //           Date: new Date()
    //           });
            

}

    return (
    <div className ="createPostPage">

    <div className="cpContainer">
    <h1>Create a Post</h1>
    <div className="inputGp">
        <label>Title:</label>
        <input placeholder = "Title..." 
        onChange={(event) => {
            setTitle(event.target.value)}}/>
    </div>
    <div className = "inputGp">
        <label>Description:</label>
        <textarea placeholder="Description"
        onChange={(event) => {
            setPostText(event.target.value)}}/>
    </div>
    <div className="inputGp">
    <label>Upload Image:</label>
    <input type="file" onChange={(event) => {
        setImage(event.target.files[0]);

    }} />
</div>
<div className="inputGp">
    <label>Upload Audio:</label>
    <input type="file" onChange={(event) => {
        setAudio(event.target.files[0]);

    }} />
</div>

<div>
      <label>Select the corresponding playlist : </label>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">-- Select --</option>
        <option value="News">News</option>
        <option value="Learning">Learning</option>
        <option value="Entertain">Entertain</option>
      </select>
      <p>Selected option : {selectedOption}</p>
    </div>


    <button onClick={upload}>Submit Podcast</button>
    </div>
    </div>
    );
}

export default Post;