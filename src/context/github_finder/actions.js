import React, { useReducer } from "react";
import axios from "axios";
import GFcontext from "./context";
import GFreducer from "./reducer";
import { GET_USERS, GET_PROFILE, SEARCH_USERS, SET_LOADING } from "../Types";

const GFaction = props => {
  const initialState = {
    users: [],
    userProfile: {},
    loading: false
  };
  const [state, dispatch] = useReducer(GFreducer, initialState);

  return (
    <GFcontext.Provider
      value={{
        users: state.users,
        userProfile: state.userProfile,
        loading: state.loading
      }}
    >
      {props.children}
    </GFcontext.Provider>
  );
};

export default GFaction;
