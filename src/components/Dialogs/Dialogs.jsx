import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                <Dialog />
                <Dialog />
                <Dialog />
            </div>
            <div className={classes.messages}>
                <Message />
                <Message />
                <Message />
            </div>
        </div>
    );
}

export default Dialogs;