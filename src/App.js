import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import classes from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Navbar />
        <div className={classes.content}>
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
