import React, { useEffect, useContext } from "react";
import GithubContext from "../../context/github_finder/context";
import UserItem from "./UserItem";
import loading_url from "../../imgs/loading.gif";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users, fethusers } = githubContext;
  useEffect(() => {
    fethusers();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid p-5 mt-5">
      {loading ? (
        <img
          src={loading_url}
          className="card-img-top w-25 mx-auto d-block"
          alt="Github Finder Loading"
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

export default Users;
