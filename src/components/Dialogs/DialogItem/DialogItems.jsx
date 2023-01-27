import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <img
            src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;