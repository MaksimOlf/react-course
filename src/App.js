import React, { Component, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import "./components/null.css";
import HeaderComponent from "./components/Header/HeaderContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";

import { initializeApp } from "../src/redux/appReducer";
import Preloader from "./components/common/preloader/preloader";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const FindUsers = React.lazy(() =>
  import("./components/FindUsers/FindUsersContainer")
);
const Settings = React.lazy(() => import("./components/Settings/Settings"));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return (
        <div className="preloader">
          <Preloader />
        </div>
      );
    }
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderComponent />
          <Sidebar />
          <Suspense
            fallback={
              <div className="preloader">
                <Preloader />
              </div>
            }
          >
            <div className="content">
              <Route path="/login" render={() => <Login />} />
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/findUsers" render={() => <FindUsers />} />
              <Route path="/settings" render={() => <Settings />} />
            </div>
          </Suspense>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
