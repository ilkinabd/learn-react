const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
  dialogs: [
    {
      id: 1,
      name: "Dimych"
    },
    {
      id: 2,
      name: "Andrew"
    },
    {
      id: 3,
      name: "Sveta"
    },
    {
      id: 4,
      name: "Sasha"
    },
    {
      id: 5,
      name: "Viktor"
    },
    {
      id: 6,
      name: "Valera"
    }
  ],
  messages: [
    {
      id: 1,
      message: "Hi"
    },
    {
      id: 2,
      message: "How is your it-kamasutra"
    },
    {
      id: 3,
      message: "Yo"
    },
    {
      id: 4,
      message: "Yo"
    },
    {
      id: 5,
      message: "Yo"
    },
    {
      id: 6,
      message: "Yo"
    }
  ],
  messagesCount: 6,
  dialogsCount: 6,
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return {
        ...state,
        newMessageText: action.text
      };
    case SEND_MESSAGE:
      const message = {
        id: ++state.messagesCount,
        message: state.newMessageText
      };
      return {
        ...state,
        messages: [...state.messages, message]
      };
    default:
      return state;
  }
};

export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export default dialogsReducer;
