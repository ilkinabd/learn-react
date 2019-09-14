import React from 'react';
import Post from './Post/Post';
// import classes from './Posts.module.css';

function Posts() {
    return (
        <div className="posts">
            <p>My posts</p>
            <form>
                <textarea rows="5"></textarea>
                <input type="submit" value="Send post" />
            </form>
            <div className="postItems">
                <Post message="Hellow world" />
                <Post message="I am sad" />
            </div>
        </div>
    );
}

export default Posts;