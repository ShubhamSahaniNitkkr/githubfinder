import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Profile from "./components/user/Profile";
import Aboutus from "./components/pages/AboutUs";
import NotFound from "./components/pages/NotFound";

import GithubState from "./context/github_finder/actions";

const App = () => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder" />
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/AboutUs" component={Aboutus} />
            <Route exact path="/Profile/:username" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
