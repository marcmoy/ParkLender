// Spot API Util
import { fetchSpots,
         fetchSpot,
         createReview,
         createSpot
       } from '../util/spot_api_util';
// Spot Action
import { requestSpots,
         receiveSpot,
         receiveSpots,
         SpotConstants
       } from '../actions/spots_actions';
// Filter Constants
import { FilterConstants } from '../actions/filter_actions';
import { addSpinner } from '../util/loader';

export default ({getState, dispatch}) => next => action => {
  const spotsSuccess = data => dispatch(receiveSpots(data));
  const spotSuccess = data => dispatch(receiveSpot(data));
  const result = next(action);
  switch(action.type){
    case SpotConstants.REQUEST_SPOTS:
      const filter = getState().filter;
      addSpinner();
      fetchSpots(filter, spotsSuccess);
      break;
    case SpotConstants.REQUEST_SPOT:
      fetchSpot(action.id, spotSuccess);
      break;
    case FilterConstants.UPDATE_FILTER:
      dispatch(requestSpots());
      break;
    case SpotConstants.CREATE_SPOT:
      createSpot(action.spot, spotSuccess);
      break;
    case SpotConstants.CREATE_REVIEW:
      createReview(action.review, spotSuccess);
      break;
    default:
      break;
  }
  return result;
};
