import s from './../Dialogs.module.css';

const Message = (props) => {

    return <div className={s.dialog + ' ' + s.props.name}>
        {props.message}
    </div>
}


export default Message;
