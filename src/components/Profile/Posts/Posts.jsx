import React from 'react';
import Post from './Post/Post';
// import classes from './Posts.module.css';

const Posts = ({ posts, addPost, updateNewPostText, newPostText }) => {
    const newPostElement = React.createRef();

    const postsElemetns = posts.map(p => (<Post key={p.id} content={p.content} />));
    const onNewPostTextChange = () => {
        updateNewPostText(newPostElement.current.value);
    }

    const onSendPostClick = () => {
        addPost();
    }

    return (
        <div className="posts">
            <p>My posts</p>
            <form>
                <textarea onChange={onNewPostTextChange} ref={newPostElement} rows="5" value={newPostText}></textarea>
                <button type="button" onClick={onSendPostClick}>Send post</button>
            </form>
            <div className="postItems">
                {postsElemetns}
            </div>
        </div>
    );
}

export default Posts;