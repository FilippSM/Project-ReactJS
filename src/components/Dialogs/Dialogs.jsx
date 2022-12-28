import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Illidan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Rogan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Garosh</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Jupiter</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>
                    Hi.
                </div>
                <div className={s.dialog}>
                    What's new?
                </div>
                <div className={s.dialog}>
                    By.
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
