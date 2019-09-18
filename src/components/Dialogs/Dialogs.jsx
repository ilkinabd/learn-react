import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs() {
    
    let dialogElements = dialogs.map((dialog) => {
        return (<Dialog key={dialog.id} name={dialog.name} id={dialog.id} />);
    });

    let messageElements = messages.map((message) => {
        return (<Message key={message.id} id={message.id} message={message.message} />);
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;