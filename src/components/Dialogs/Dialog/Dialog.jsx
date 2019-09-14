import React from 'react';
import classes from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

function Dialog(props) {
    return (
        <div className={classes.dialog}>
            <NavLink to="/dialogs/2">Nastya</NavLink>
        </div>
    );
}

export default Dialog;