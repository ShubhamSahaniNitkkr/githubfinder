import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";

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
      <div className="App">
        {/* {process.env.REACT_APP_MY_NAME} */}
        <Navbar title="Github Finder" searchUsers={this.searchUsers} />
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
