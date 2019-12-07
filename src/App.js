import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Profile from "./components/user/Profile";
import Aboutus from "./components/pages/AboutUs";

class App extends Component {
  state = {
    users: [],
    userProfile: {},
    loading: false
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });

    const res = await axios.get(`https://api.github.com/users`);

    this.setState({
      users: res.data,
      loading: false
    });
  }

  searchUsers = async text => {
    this.setState({
      loading: true
    });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );

    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  getUserProfile = async username => {
    this.setState({
      loading: true
    });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${
        username.indexOf(":") > -1 ? username.replace(":", "") : username
      }`
    );
    this.setState({
      userProfile: res.data.items[0],
      loading: false
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" searchUsers={this.searchUsers} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Users users={this.state.users} loading={this.state.loading} />
              )}
            />
            <Route
              exact
              path="/Profile/:username"
              render={props => (
                <Profile
                  {...props}
                  getUserProfile={this.getUserProfile}
                  profile={this.state.userProfile}
                  loading={this.state.loading}
                />
              )}
            />
            <Route exact path="/AboutUs" component={Aboutus} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
