import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <img src='https://wallpaperaccess.com/full/697601.jpg'></img>
        <div>
            ava + desrition
        </div>
        <div>
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;