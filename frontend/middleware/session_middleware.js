import { receiveCurrentUser,
         receiveErrors,
         SessionConstants
       } from '../actions/session_actions';
import { login, signup, logout } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = success => {
    return user => dispatch(receiveCurrentUser(user, success));
  };

  const errorCallback = callback => {
    return xhr => {
      const errors = xhr.responseJSON;
      dispatch(receiveErrors(errors, callback));
    };
  };

  switch(action.type){
    case SessionConstants.LOGIN:
      disableSessionForm();
      login(
        action.user,
        successCallback(action.success),
        errorCallback(action.success)
      );
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      disableSessionForm();
      if (action.user.user.username === 'Demo-User') {
        login(
          action.user,
          successCallback(action.success),
          errorCallback(action.success)
        );
      } else {
        signup(
          action.user,
          successCallback(action.success),
          errorCallback(action.success)
        );
      }
      return next(action);
    default:
      return next(action);
  }
};

const disableSessionForm = () => {
  $('#modal').off('click');
  $('.submit-button').prop('disabled', true);
  $('.demo-button').prop('disabled', true);
  $('#username').prop('disabled', true);
  $('#password').prop('disabled', true);
};
