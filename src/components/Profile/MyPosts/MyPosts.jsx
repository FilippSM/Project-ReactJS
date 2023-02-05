import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
        alert('Hello');
    };

    return (
        <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
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