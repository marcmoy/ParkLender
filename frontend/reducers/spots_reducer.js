import { SpotConstants } from '../actions/spots_actions';
import { merge, isEmpty } from 'lodash';
import { removeSpinner, addEmptyMessage } from '../util/loader';

const SpotsReducer = function(state = {}, action){
  switch(action.type){
    case SpotConstants.RECEIVE_SPOTS:
      removeSpinner();
      if (isEmpty(action.spots)) addEmptyMessage();
      return action.spots;
    case SpotConstants.RECEIVE_SPOT:
      const newSpot = {[action.spot.id]: action.spot};
      if (action.success) {
        // ensures client receives spot before redirecting
        setTimeout(() => action.success(action.spot), 200);
      }
      return merge({}, state, newSpot);
    default:
      return state;
  }
};

export default SpotsReducer;
