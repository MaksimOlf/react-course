import React from 'react';
import './App.css';
import './components/null.css';
import Header from './components/Header/Header';
import Navigate from './components/Navigate/Navigate';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navigate />
      <Profile />
    </div>
  );
}

export default App;
