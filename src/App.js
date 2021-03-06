import React, { Component, Suspense } from "react";
import { HashRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect, Switch } from "react-router";

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
      <HashRouter basename={process.env.PUBLIC_URL}>
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
              <Switch>
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
                <Redirect exact from="/" to="/profile" />
                <Route path="*" render={() => <div>404 Not found</div>} />
              </Switch>
            </div>
          </Suspense>
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
