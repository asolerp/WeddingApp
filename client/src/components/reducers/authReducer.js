import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  UPDATE_PARTICIPATION,
  UPDATE_BUS,
  UPDATE_MENU,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_PARTICIPANTS_SUCCESS,
  GET_ALL_PARTICIPANTS_FAIL
} from "../actions/types";

import spanish from "../../textContent/spanish.json";
// import english from '../../textContent/english.json'

const user_state = (
  state = {
    username: "",
    password: "",
    isWaiting: false,
    authenticated: false,
    email: "",
    user: undefined,
    users: undefined,
    participants: undefined,
    lenguage: spanish,
    error: "",
    errorUsers: ""
  },
  action
) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, isWaiting: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        isWaiting: false
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, isWaiting: false };
    case GET_ALL_USERS_FAIL:
      return { ...state, errorUsers: action.payload};
    case GET_ALL_USERS_SUCCESS:
      return { ...state, users: action.payload };
      case GET_ALL_PARTICIPANTS_FAIL:
      return { ...state, errorUsers: action.payload};
    case GET_ALL_PARTICIPANTS_SUCCESS:
      return { ...state, participants: action.payload };
    case UPDATE_PARTICIPATION:
      return { ...state, user: action.payload };
    case UPDATE_BUS:
      return { ...state, user: action.payload };
    case UPDATE_MENU:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default user_state;
