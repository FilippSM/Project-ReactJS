import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let post = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ]

   let postElements = post.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

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
                {postElements}
            </div>
        </div>)
}

export default MyPosts;