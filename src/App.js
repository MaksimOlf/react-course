import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import './components/null.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import FindUsers from './components/FindUsers/FindUsers';
import Settings from './components/Settings/Settings';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className='content'>
          <Route path="/profile/:userId?" render={ () => <ProfileContainer />} />
          <Route path="/dialogs" render={ () => <DialogsContainer />} />
          <Route path="/news" render={ () => <News />} />
          <Route path="/music" render={ () => <Music />} />
          <Route path="/findUsers" render={ () => <FindUsers />} />
          <Route path="/settings" render={ () => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
