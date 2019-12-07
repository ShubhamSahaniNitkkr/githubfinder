import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Profile from "./components/user/Profile";
import Aboutus from "./components/pages/AboutUs";

const App = () => {
  const [users, setusers] = useState([]);
  const [userProfile, setuserProfile] = useState({});
  const [loading, setloading] = useState(false);

  async function fethusers() {
    setloading(true);
    let res = await axios.get(`https://api.github.com/users`);
    setusers(res.data);
    setloading(false);
  }

  useEffect(() => {
    fethusers();
    // eslint-disable-next-line
  }, []);

  const searchUsers = async text => {
    setloading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    setusers(res.data.items);
    setloading(false);
  };

  const getUserProfile = async username => {
    setloading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${
        username.indexOf(":") > -1 ? username.replace(":", "") : username
      }`
    );
    setuserProfile(res.data.items[0]);
    setloading(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar title="Github Finder" searchUsers={searchUsers} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Users users={users} loading={loading} />}
          />
          <Route
            exact
            path="/Profile/:username"
            render={props => (
              <Profile
                {...props}
                getUserProfile={getUserProfile}
                profile={userProfile}
                loading={loading}
              />
            )}
          />
          <Route exact path="/AboutUs" component={Aboutus} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
