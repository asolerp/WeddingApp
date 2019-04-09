import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  GET_ALL_USERS,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_ALL_PARTICIPANTS,
  GET_ALL_PARTICIPANTS_SUCCESS,
  GET_ALL_PARTICIPANTS_FAIL
} from "./types";

import  AuthService from "../api/authBack";

const service = new AuthService();


export const userNameChanged = text => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
      dispatch({ type: GET_ALL_USERS });
      try {
        const users = await service.getAllUsers();
         dispatch({ type: GET_ALL_USERS_SUCCESS, payload: users.data })
      } catch (e) {
         dispatch({
          type:GET_ALL_USERS_FAIL,
          payload: e.response.data.message
        });
      }
  }
};

export const getParticipants = () => {
  return async (dispatch) => {
      dispatch({ type: GET_ALL_PARTICIPANTS });
      try {
        const users = await service.getAllParticipants();
         dispatch({ type: GET_ALL_PARTICIPANTS_SUCCESS, payload: users.data })
      } catch (e) {
         dispatch({
          type:GET_ALL_PARTICIPANTS_FAIL,
          payload: e.response.data.message
        });
      }
  }
};


export const loginUser = ({ username, password, history }) => {
  return async (dispatch) => {
      dispatch({ type: LOGIN_USER });
      try {
        console.log(history)
        const user = await service.login(username, password);
         dispatch({ type: LOGIN_USER_SUCCESS, payload: user.data })
         history.push('/home')
      } catch (e) {
        console.log(e.response)
         dispatch({
          type: LOGIN_USER_FAIL,
          payload: e.response.data.message
        });
      }
  }
};
