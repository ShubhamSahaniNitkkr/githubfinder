import React, { Component } from "react";
import PropTypes from "prop-types";

class Navbar extends Component {
  // const Navbar = ({ title }) => {
  state = {
    searchUserText: "",
    pageerror: false
  };

  static defaultProps = {
    title: "Page Title"
  };

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.searchUserText !== "") {
      this.props.searchUsers(this.state.searchUserText);
    } else {
      this.setState({ errorpage: true });
      setTimeout(
        function() {
          this.setState({ errorpage: false });
        }.bind(this),
        1000
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.errorpage && (
          <div class="alert alert-danger mt-5" role="alert">
            Please specify the user name.
          </div>
        )}

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a className="navbar-brand text-info" href="!#">
            <i className="fas fa-user-circle fa-lg"></i>
            &nbsp;
            {this.props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form
              className="form-inline my-2 my-lg-0 ml-auto col-md-12"
              onSubmit={this.onSubmit}
            >
              <input
                className="form-control mr-sm-2 col-md-9 ml-auto"
                type="search"
                placeholder="Enter Name"
                aria-label="Search"
                name="searchUserText"
                value={this.state.searchUserText}
                onChange={this.onChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search Github Users
              </button>
            </form>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

// Navbar.defaultProps = {
//   title: "Page Title"
// };

// Navbar.propTypes = {
//   title: PropTypes.string.isRequired
// };

export default Navbar;
