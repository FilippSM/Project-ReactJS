import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react'
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        props.updateNewPostText(' ');
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                new post
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>)
}

export default MyPosts;