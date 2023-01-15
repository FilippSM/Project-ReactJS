import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogItem from "./components/Dialogs/DialogItem/DialogItems";
import Message from "./components/Dialogs/Message/Message";

const App = (props) => {

/*
    let dialogs = [
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
    ]
*/

/*    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20}
    ]*/

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Routes>
                        {/*<Route path='/dialogs/' element={<DialogItems/>}/>*/}
                        <Route path='/dialogs/*' element= {<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path='/profile' element={<Profile post={props.posts}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/setting' element={<Setting/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;