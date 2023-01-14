import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = () => {

    return <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>
}

export default Profile;