import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import classes from "./App.module.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Navbar />
      <div className={classes.content}>
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile />} />
      </div>
    </div>
  );
}

export default App;
