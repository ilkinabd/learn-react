import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

function Dialogs({ dialogs, messages, newMessageText, updateNewMessageText, sendMessage }) {

    const newMessageElement = React.createRef();

    const dialogElements = dialogs.map((dialog) => {
        return (<Dialog key={dialog.id} name={dialog.name} id={dialog.id} />);
    });

    const messageElements = messages.map((message) => {
        return (<Message key={message.id} id={message.id} message={message.message} />);
    })

    const onNewTextMessageChange = () => {
        updateNewMessageText(newMessageElement.current.value);
    }

    const onSendMessageClick = () => {
        sendMessage();
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div className={classes.send}>
                <textarea placeholder="send your message" onChange={onNewTextMessageChange}
                    ref={newMessageElement}
                    value={newMessageText}></textarea>
                <button type="button" onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;