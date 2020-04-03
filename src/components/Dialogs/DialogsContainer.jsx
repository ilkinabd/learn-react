import {
    updateNewMessageTextActionCreator,
    sendMessageActionCreator
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = ({ dialogsPage: {
    dialogs, messages, newMessageText
} }) => ({
    dialogs,
    messages,
    newMessageText
});

const mapDispatchToProps = (dispatch) => ({
    updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
    sendMessage: () => dispatch(sendMessageActionCreator()),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;