import React from 'react';

function Post() {
    return (
    <div className ="createPostPage">

    <div className="cpContainer">
    <h1>Create a Post</h1>
    <div className="inpuGp">
        <label>Title:</label>
        <input placeholder = "Title..."/>
    </div>
    <div className = "inputGp">
        <label>Description:</label>
        <input textarea="Description"/>
    </div>
    <button>Submit Podcast</button>
    </div>
    </div>
    );
}

export default Post;