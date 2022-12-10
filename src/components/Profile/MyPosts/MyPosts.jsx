import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div>
        <div>
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <Post />
            </div>
        </div>
    </div>)
}

export default MyPosts;