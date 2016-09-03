import { WHERE_TO_CONSTANTS } from '../actions/whereto_actions';
import merge from 'lodash/merge';

const WhereToReducer = function(state = {}, action){
  switch (action.type) {
    case WHERE_TO_CONSTANTS.OPEN:
      return merge({}, state, { whereTo: true });
    case WHERE_TO_CONSTANTS.CLOSE:
      return merge({}, state, { whereTo: false });
    default:
      return state;
  }
};

export default WhereToReducer;
