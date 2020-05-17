import axios from "axios";
import qs from "querystring";

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILED,
  FETCH_USERS_SUCCESS,
  ADD_USER_REQUEST,
  ADD_USER_FAILED,
  ADD_USER_SUCCESS,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
} from "./actionTypes";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersFailed = (message) => ({
  type: FETCH_USERS_FAILED,
  payload: message,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());
  const requestBody = {
    usertype: 3,
  };
  const url = "https://smydata-demo.com/api/getusers";

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  axios
    .post(url, qs.stringify(requestBody), config)
    .then(async (result) => {
      dispatch(fetchUsersSuccess(result.data.users));
      // console.log("users data ==>", result);
    })
    .catch((err) => {
      //fetchUsersFailed(error);
      console.log(err);
    });
};

export const addUserRequest = () => ({
  type: ADD_USER_REQUEST,
});

export const addUserSuccess = (message) => ({
  type: ADD_USER_SUCCESS,
  payload: message,
});

export const addUserFailed = (message) => ({
  type: ADD_USER_FAILED,
  payload: message,
});

export const addUser = (user) => (dispatch) => {
  //console.log("this is user", user);
  dispatch(addUserRequest());
  const requestBody = {
    usertype: 3,
    mobile: user.mobile,
    fname: user.firstName,
    lname: user.lastName,
    email: user.email,
    address: user.address,
    password: 1234567,
  };
  const url = "https://smydata-demo.com/api/signup";

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  axios
    .post(url, qs.stringify(requestBody), config)
    .then(async (result) => {
      dispatch(addUserSuccess(result.data.message));
      dispatch(fetchUsers());
      //console.log(result.data);
    })
    .catch((err) => {
      //fetchUsersFailed(error);
      console.log(err);
    });
};

export const editUserRequest = () => ({
  type: EDIT_USER_REQUEST,
});

export const editUserSuccess = (message) => ({
  type: EDIT_USER_SUCCESS,
  payload: message,
});

export const editUserFailed = (message) => ({
  type: EDIT_USER_FAILED,
  payload: message,
});

export const editUser = (user) => (dispatch) => {
  // console.log(user.userid);
  dispatch(editUserRequest());
  const requestBody = {
    userid: user.userid,
    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address,
  };
  const url = "https://smydata-demo.com/api/updateprofile";

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  axios
    .post(url, qs.stringify(requestBody), config)
    .then(async (result) => {
      dispatch(editUserSuccess(result.data.message));
      dispatch(fetchUsers());
      //console.log(result.data);
    })
    .catch((err) => {
      //fetchUsersFailed(error);
      console.log(err);
    });
};

export const deleteUserRequest = () => ({
  type: DELETE_USER_REQUEST,
});

export const deleteUserSuccess = (message) => ({
  type: DELETE_USER_SUCCESS,
  payload: message,
});

export const deleteUserFailed = (message) => ({
  type: DELETE_USER_FAILED,
  payload: message,
});

export const deleteUser = (user) => (dispatch) => {
  //console.log("rrrram", user);
  dispatch(deleteUserRequest());
  const requestBody = {
    userid: user.restKey,
  };
  const url = "https://smydata-demo.com/api/deleteuser";

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  axios
    .post(url, qs.stringify(requestBody), config)
    .then(async (result) => {
      dispatch(deleteUserSuccess(result.data.message));
      dispatch(fetchUsers());
      // console.log(result.data);
    })
    .catch((err) => {
      //fetchUsersFailed(error);
      console.log(err);
    });
};
