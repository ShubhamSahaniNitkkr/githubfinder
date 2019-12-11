import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Users from "./components/User/Users";
import Profile from "./components/User/Profile";
import Aboutus from "./components/Pages/AboutUs";
import NotFound from "./components/Pages/NotFound";

import GithubState from "./context/github_finder/GFactions";

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
