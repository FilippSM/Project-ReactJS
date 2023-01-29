import s from './../Dialogs.module.css';

const Message = (props) => {

    return <div className={s.dialog + ' ' + s[props.box]}>
        {props.message}
    </div>
}


export default Message;
