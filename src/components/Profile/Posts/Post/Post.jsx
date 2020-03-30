import React from 'react';
// import classes from './Post.module.css';

function Post({ content }) {
    return (
        <div className="post">
            <p>{content}</p>
        </div>
    );
}

export default Post;