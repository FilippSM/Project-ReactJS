import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import DialogItem from "../Dialogs/DialogItem/DialogItems";
import Dialogs from "../Dialogs/Dialogs";

const Profile = (props) => {

/*    let post = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ]*/

    return <div>
        <ProfileInfo/>
        <MyPosts post={props.post}/>
    </div>
}

export default Profile;

/*
<DialogItem name={d.name} id={d.id}/>*/
/*<Dialogs dialogs={dialogs} messages={messages}/>*/
