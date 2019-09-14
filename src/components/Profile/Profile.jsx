import React from 'react';
import Posts from './Posts/Posts';
import classes from './Profile.module.css';

function Profile() {
    return (
        <div className="profile">
            <div className="wallpaper">
                <img src="https://via.placeholder.com/1200x150" alt="wallpaper" />
            </div>
            <div className={classes.info}>
                <div className={classes.avatar}>
                    <img src="https://via.placeholder.com/128" alt="avatar" />
                </div>
                <div className={classes.description}>
                    <p>Description</p>
                </div>
            </div>
            <Posts />
        </div>
    );
}

export default Profile;