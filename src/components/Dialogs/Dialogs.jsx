import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Illidan" id="2"/>
                <DialogItem name="Rogan" id="3"/>
                <DialogItem name="Garosh" id="4"/>
                <DialogItem name="Jupiter" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="What's new?"/>
                <Message message="By."/>
            </div>
        </div>
    )
}

export default Dialogs;
