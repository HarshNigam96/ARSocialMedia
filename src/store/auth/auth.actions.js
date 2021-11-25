import {authActions} from '../actionTypes';
import URL from '../../common/constants/url';
import {instance} from '../apiService';

export const doLogin = params => {
  return async (dispatch, getState) =>
    await instance(dispatch, 'POST', URL.LOGIN, false, params);
};

export const _doAuthUserSuccess = payload => {
  return {type: authActions.AUTH_LOGIN_PAYLOAD, payload};
};

export const _doAuthLogout = () => {
  return async (dispatch, getState) => {
    dispatch({type: authActions.AUTH_LOGOUT});
  };
};
