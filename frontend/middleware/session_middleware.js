import { receiveCurrentUser,
         receiveErrors,
         SessionConstants
       } from '../actions/session_actions';
import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = success => {
    return user => dispatch(receiveCurrentUser(user, success));
  };

  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
  };

  switch(action.type){
    case SessionConstants.LOGIN:
      login(action.user, successCallback(action.success), errorCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      if (action.user.user.username === 'Demo-User') {
        login(action.user, successCallback(action.success), errorCallback);
      } else {
        signup(action.user, successCallback(action.success), errorCallback);
      }
      return next(action);
    default:
      return next(action);
  }
};
