import React, {useState} from 'react';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import {auth, db} from '../firebase-config';
import { collection, doc, setDoc } from "firebase/firestore"; 

function Post() {
const [title, setTitle] = useState("");
const [postText, setPostText] = useState("");
const [image, setImage] = useState("");
const [audio, setAudio] = useState("");

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
              Author: 'Author',
              Playlists: '',
              Date: new Date()
              });

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


    <button onClick={upload}>Submit Podcast</button>
    </div>
    </div>
    );
}

export default Post;