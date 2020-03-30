import React from 'react';
import Posts from "./Posts";
import {
    updateNewPostTextActionCreator,
    addPostActionCreator
} from '../../../redux/profileReducer';
import StoreContext from '../../../redux/storeContext';


const PostsContainer = () => {
    return (<StoreContext.Consumer>
        {(store) => {
            const { newPostText, posts } = store.getState().profilePage;

            const updateNewPostText = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            };

            const addPost = () => {
                store.dispatch(addPostActionCreator());
            }
            return (<Posts newPostText={newPostText}
                updateNewPostText={updateNewPostText}
                addPost={addPost} posts={posts} />)
        }}
    </StoreContext.Consumer>)
}

export default PostsContainer;