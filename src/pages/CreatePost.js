import React, {useState} from 'react';

function Post() {
const [title, setTitle] = useState("");
const [postText, setPostText] = useState("");

    return (
    <div className ="createPostPage">

    <div className="cpContainer">
    <h1>Create a Post</h1>
    <div className="inpuGp">
        <label>Title:</label>
        <input placeholder = "Title..." 
        onChange={(event) => {
            setTitle(event.target.value)}}/>
    </div>
    <div className = "inputGp">
        <label>Description:</label>
        <textarea placeholder="Description"/>
    </div>
    <button>Submit Podcast</button>
    </div>
    </div>
    );
}

export default Post;