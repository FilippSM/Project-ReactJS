import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            {/*<Navbar/>*/}
            <div class='app-wrapper-content'>
                <Routes>
                    {/*<Route path='/dialogs/' element={<DialogItems/>}/>*/}
                    <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' element={<Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={updateNewPostText}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/setting' element={<Setting/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;