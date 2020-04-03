const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initialState = {
  posts: [
    {
      id: 1,
      content: "Hello world",
      likesCount: 0
    }
  ],
  postsCount: 1,
  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const post = {
        id: ++state.postsCount,
        content: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, post]
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      };
    default:
      return state;
  }
};

export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  text
});
export const addPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;
