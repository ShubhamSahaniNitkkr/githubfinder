import React from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";
import loading_url from "../../imgs/loading.gif";

const Users = ({ users, loading }) => {
  return (
    <div className="container-fluid p-5 mt-5">
      {loading ? (
        <img
          src={loading_url}
          className="card-img-top w-25"
          alt="Github Finder Loading"
          style={{ marginLeft: "38%" }}
        />
      ) : (
        <div className="row d-flex justify-content-around">
          {users.map((user, idx) => (
            <UserItem user={user} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

Users.prototype = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

Users.defaultProps = {
  users: [
    {
      login: "mojombo",
      id: 1,
      node_id: "MDQ6VXNlcjE=",
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mojombo",
      html_url: "https://github.com/mojombo",
      followers_url: "https://api.github.com/users/mojombo/followers",
      following_url:
        "https://api.github.com/users/mojombo/following{/other_user}",
      gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
      organizations_url: "https://api.github.com/users/mojombo/orgs"
    }
  ],
  loading: false
};

export default Users;
