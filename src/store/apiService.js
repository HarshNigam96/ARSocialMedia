/* eslint-disable no-shadow */
import {store} from './store';

export const instance = async (
  dispatch,
  method = 'GET',
  URL,
  isAuth = false,
  params = {},
  isFile = false,
) => {
  const state = store.getState();
  const isInternetReachable = state.device.isInternetReachable;
  if (isInternetReachable) {
    try {
      let headers = {};
      if (isAuth) {
        headers = {
          ...headers,
          Authorization: 'Bearer ' + state.auth.user.access_token,
        };
      }
      if (isFile) {
        headers = {
          ...headers,
          ContentType: 'multipart/form-data',
        };
      }
      let response = {};
      if (method === 'GET') {
        response = await fetch(URL, {
          method: method,
          headers,
        }).then(response => response.json());
      } else {
        response = await fetch(URL, {
          method: method,
          body: params,
          headers,
        }).then(response => response.json());
      }
      return response;
    } catch (error) {
      return error;
    }
  } else {
    return {
      message:
        'Unable to connect server, Check your internet connection status.',
      status: false,
    };
  }
};
