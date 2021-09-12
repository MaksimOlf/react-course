import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import './components/null.css';
import HeaderComponent from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import FindUsers from './components/FindUsers/FindUsers';
import Settings from './components/Settings/Settings';

import { initializeApp } from '../src/redux/appReducer';
import Preloader from './components/common/preloader/preloader';


class App extends Component {
  
  componentDidMount() {
		this.props.initializeApp();
	}

  render () {
    if (!this.props.initialized) {
      return <div className='preloader'><Preloader /></div>
    } 
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderComponent />
          <Sidebar />
          <div className='content'>
            <Route path="/login" render={ () => <Login />} />
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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, {initializeApp})(App);
