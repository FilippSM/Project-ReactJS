import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Post from "../Profile/MyPosts/Post/Post";
import DialogItem from "../Dialogs/DialogItem/DialogItems";

const setActive = ({isActive}) => (isActive ? s.active : s.item);

const Navbar = (props) => {

    let friendsElements = props.state.friends.map(f => <Sidebar name={f.name}/>);

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" className={setActive}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/news" className={setActive}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/music" className={setActive}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/setting" className={setActive}>Settings</NavLink>
        </div>
        {/*<Sidebar/>*/}
        <h3>Friends:</h3>
        <div className={s.friendsElements}>
            {friendsElements}
        </div>


    </nav>
}

export default Navbar;