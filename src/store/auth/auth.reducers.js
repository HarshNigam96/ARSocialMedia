import {authActions} from '../actionTypes';

const getInitialState = () => ({
  user: {},
  staySigned: undefined,
  loginStatus: undefined,
});

export const auth = (state = getInitialState(), action) => {
  switch (action.type) {
    case authActions.AUTH_LOGIN_PAYLOAD:
      return {...state, user: action.payload};
    case authActions.AUTH_LOGOUT:
      return {...state, user: {}};
    case authActions.SET_STAY_SIGNED:
      return {...state, staySigned: action.payload};
    case authActions.SET_LOGIN_STATUS:
      return {...state, loginStatus: action.payload};
    case authActions.SET_VAL_STAY_SIGNED:
      return {...state, staySigned: action.payload};
    default:
      return state;
  }
};
