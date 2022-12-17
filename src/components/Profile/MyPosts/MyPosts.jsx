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
                <Post message='Hi, how are you?' unlike="15"/>
                <Post message="It's my first post" unlike="20"/>
            </div>
        </div>
    </div>)
}

export default MyPosts;