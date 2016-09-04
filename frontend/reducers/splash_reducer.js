import { SPLASH_CONSTANTS } from '../actions/splash_actions';
import merge from 'lodash/merge';

const SplashReducer = function(state = {}, action){
  switch (action.type) {
    case SPLASH_CONSTANTS.SPLASH_ON:
      return merge({}, state, { splash: true });
    case SPLASH_CONSTANTS.SPLASH_OFF:
      return merge({}, state, { splash: false });
    default:
      return state;
  }
};

export default SplashReducer;
