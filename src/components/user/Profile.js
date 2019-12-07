import React, { Component } from "react";

export class Profile extends Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.username);
  }
  render() {
    const {
      login,
      id,
      avatar_url,
      html_url,
      repos_url,
      site_admin
    } = this.props.profile;
    return (
      <div className="container-fluid mt-5 d-flex ">
        <div
          className="card mt-5"
          style={{ maxWidth: "540px", margin: "0 auto" }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={avatar_url} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {login} ({id})
                </h5>
                <p className="card-text">
                  {html_url}
                  <br />
                  {repos_url}
                  <br />
                  {site_admin}
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
