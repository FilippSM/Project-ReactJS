import s from './Post.module.css';

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBasKQW1RWFvVb78a0nlXiSwsSenJJrFVxw&usqp=CAU" />
                post 1
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;