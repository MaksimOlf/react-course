import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './components/null.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar data={props.state.sideBar} />
        <div className='content'>
          <Route path="/profile" render={ () => <Profile data={props.state.profilePage} addPost={props.addPost} textareaChange={props.textareaChange}/>} />
          <Route path="/dialogs" render={ () => <Dialogs data={props.state.dialogsPage} addMessage={props.addMessage} messageChange={props.messageChange} />} />
          <Route path="/news" render={ () => <News />} />
          <Route path="/music" render={ () => <Music />} />
          <Route path="/settings" render={ () => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
