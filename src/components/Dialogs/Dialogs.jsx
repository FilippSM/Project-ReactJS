import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItems";
import Message from "./Message/Message";

const Dialogs = (props) => {

/*    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Illidan'},
        {id: 3, name: 'Rogan'},
        {id: 4, name: 'Garosh'},
        {id: 5, name: 'Jupiter'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: "What's new?"},
        {id: 3, message: 'By.'}
    ]*/

/*    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);*/


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
