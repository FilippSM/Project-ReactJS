import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div className={s.postBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                new post
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' unlike="15"/>
                <Post message="It's my first post" unlike="20"/>
            </div>
    </div>)
}

export default MyPosts;