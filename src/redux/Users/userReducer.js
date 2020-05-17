// https://smydata-demo.com/api/getusers
// updateprofile

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

const initialState = {
  loading: false,
  users: [],
  message: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case ADD_USER_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case EDIT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case EDIT_USER_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
