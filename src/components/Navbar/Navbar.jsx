import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={classes.navbar}>
            <ul>
                <li><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/music">Music</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;