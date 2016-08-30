import { receiveCurrentUser,
         receiveErrors,
         SessionConstants
       } from '../actions/session_actions';

import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };
  switch(action.type){
    case SessionConstants.LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
