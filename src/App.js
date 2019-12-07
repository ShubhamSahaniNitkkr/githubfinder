import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Aboutus from "./components/pages/AboutUs";

class App extends Component {
  state = {
    users: [],
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
            <Route exact path="/AboutUs" component={Aboutus} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
