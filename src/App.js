import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigate from './components/Navigate';
import Profile from './components/Profile';


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
