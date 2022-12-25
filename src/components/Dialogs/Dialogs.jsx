import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Illidan
                </div>
                <div className={s.dialog}>
                    Rogan
                </div>
                <div className={s.dialog}>
                    Garosh
                </div>
                <div className={s.dialog}>
                    Jupiter
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
