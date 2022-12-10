import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div className={s.img}>
            <img src='https://wallpaperaccess.com/full/697601.jpg'></img>
        </div>
        <div>
            ava + desrition
        </div>
        <MyPosts />
    </div>
}

export default Profile;