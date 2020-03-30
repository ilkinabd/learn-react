import React from 'react';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../redux/storeContext';

const DialogsContainer = () => {
    return (<StoreContext.Consumer>
        {(store) => {
            const { dialogs, messages, newMessageText } = store.getState().dialogsPage;

            const updateNewMessageText = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text));
            }

            const sendMessage = () => {
                store.dispatch(sendMessageActionCreator());
            }

            return <Dialogs dialogs={dialogs}
                messages={messages}
                newMessageText={newMessageText}
                updateNewMessageText={updateNewMessageText}
                sendMessage={sendMessage} />

        }}
    </StoreContext.Consumer>)

}

export default DialogsContainer;