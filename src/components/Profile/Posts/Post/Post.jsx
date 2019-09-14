import React from 'react';
// import classes from './Post.module.css';

function Post(props) {
    return (
        <div className="post">
            <p>{props.message}</p>
        </div>
    );
}

export default Post;