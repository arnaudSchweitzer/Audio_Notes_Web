import React, {useState} from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import {auth, db} from '../firebase-config';
import app from '../firebase-config';
import {collection, getFirestore, doc, setDoc, getDoc} from "firebase/firestore";
import { useLocation } from 'react-router-dom';

function Post() {
    const location = useLocation();
  const { userName } = location.state;
const [title, setTitle] = useState("");
const [postText, setPostText] = useState("");
const [image, setImage] = useState("");
const [audio, setAudio] = useState("");
const [selectedOption, setSelectedOption]=useState("");
const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

const upload = async () => {

    const storage = getStorage();
    const storageRef = ref(storage, 'images/' + title);
    const uploadTask = uploadBytes(storageRef, image);
    
    
    const storageAudioRef = ref(storage, 'audios/' + title);
    const uploadAudioTask = uploadBytes(storageAudioRef, audio);

    const audiosRef = collection(db, "Audios");
            await setDoc(doc(audiosRef, title), {
              Name: title,
              Description: postText,
              Likes: 0,
              Reports: 0,
              Author: userName,
              Playlists: selectedOption,
              Date: new Date()
              });

    alert('Successfully uploaded!');    
setSelectedOption("");
    document.getElementById('input').value = '';
    document.getElementById('inputfile').value = null;
    document.getElementById('inp').value = '';
    document.getElementById('inpfile').value = null;

};

    return (
    <div className ="createPostPage">

    <div className="cpContainer">
    <h1>Create a Post</h1>
    <div className="inputGp">
        <label>Title:</label>
        <input placeholder = "Title..." id = "input"
        onChange={(event) => {
            setTitle(event.target.value)}}/>
    </div>
    <div className = "inputGp">
        <label>Description:</label>
        <textarea placeholder="Description" id = "inp"
        onChange={(event) => {
            setPostText(event.target.value)}}/>
    </div>
    <div className="inputGp">
    <label>Upload Image:</label>
    <input type="file" id = "inputfile" onChange={(event) => {
        setImage(event.target.files[0]);

    }} />
</div>
<div className="inputGp">
    <label>Upload Audio:</label>
    <input type="file" id = "inpfile" onChange={(event) => {
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


    <button onClick={() => { 
  upload(); // Call your upload function// Call the clearInputs function
}}>Submit Podcast</button>
    </div>
    </div>
    );

}

export default Post;