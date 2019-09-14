import React from 'react';
import Posts from './Posts/Posts';
import classes from './Profile.module.css';

function Profile() {
    return (
        <div className={classes.content}>
            <div className="wallpaper">
                <img src="https://via.placeholder.com/1200x150" />
            </div>
            <div className={classes.info}>
                <div className={classes.avatar}>
                    <img src="https://via.placeholder.com/128" />
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