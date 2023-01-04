import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div className={s.img}>
            <img src='https://wallpaperaccess.com/full/697601.jpg'></img>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;