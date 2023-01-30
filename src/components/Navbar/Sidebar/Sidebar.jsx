import s from './../Navbar.module.css';
import Post from "../../Profile/MyPosts/Post/Post";

const Sidebar = (props) => {

    return <div className={s.sidebar}>
        <div>
            <div>
                <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"/>
                {props.name}
                <div>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
}

export default Sidebar;