import React from 'react';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src="https://via.placeholder.com/40" alt="logo" />
            </div>
        </header>
    );
}

export default Header;