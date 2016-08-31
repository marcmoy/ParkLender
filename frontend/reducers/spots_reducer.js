import { SpotConstants } from '../actions/spots_actions';
import merge from 'lodash/merge';

const SpotsReducer = function(state = {}, action){
  switch(action.type){
    case SpotConstants.RECEIVE_SPOTS:
      return action.spots;
    case SpotConstants.RECEIVE_SPOT:
      const newSpot = {[action.spot.id]: action.spot};
      return merge({}, state, newSpot);
    default:
      return state;
  }
};

export default SpotsReducer;
