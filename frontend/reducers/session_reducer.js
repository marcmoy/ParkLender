import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';
import $ from 'jquery';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = function(state = _nullUser, action){
  switch(action.type){
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      action.success();
      return merge({}, _nullUser, {currentUser});
    case SessionConstants.LOGOUT:
      return merge({}, _nullUser);
    case SessionConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {errors});
    case SessionConstants.EMPTY_ERRORS:

      let noErrorState = Object.freeze({
        currentUser: state.currentUser,
        errors: []
      });

      return merge({}, noErrorState);
    default:
      return state;
  }
};

export default SessionReducer;
