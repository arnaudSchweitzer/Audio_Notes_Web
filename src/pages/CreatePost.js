import React from 'react';

function Post() {
    return (
    <div className ="createPostPage">

    <div classNme="cpContainer">
    <h1>Create a Post</h1>
    <div className="inpuGp">
        <label>Title:</label>
        <input placeholder = "Title..."/>
    </div>
    <div className = "inputGp">
        <label>Description:</label>
        <input placeholder='Description'/>
    </div>
    </div>
    </div>
    );
}

export default Post;