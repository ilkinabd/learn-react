import Posts from "./Posts";
import {
    updateNewPostTextActionCreator,
    addPostActionCreator
} from '../../../redux/profileReducer';

import { connect } from 'react-redux';

const mapStateToProps = ({ profilePage: {
    newPostText, posts
} }) => ({
    newPostText,
    posts,
});

const mapDispatchToProps = (dispatch) => ({
    updateNewPostText: (text) => (dispatch(updateNewPostTextActionCreator(text))),
    addPost: () => (dispatch(addPostActionCreator())),
});

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;