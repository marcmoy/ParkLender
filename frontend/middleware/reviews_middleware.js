         // Spot Review API Util
import { fetchSpotReviews,
         createSpotReview,
        //  User Review API Util
         fetchUserReviews,
         createUserReview
       } from '../util/review_api_util';

         // Spot Review Actions
import { receiveSpotReviews,
         receiveSpotReview,
        //  User Review Actions
         receiveUserReviews,
         receiveUserReview,
         // Review Constants
         ReviewConstants
       } from '../actions/review_actions';

export default ({getState, dispatch}) => next => action => {
  switch(action.type){
    // Spot Reviews
    case ReviewConstants.REQUEST_SPOT_REVIEWS:
      const requestSpotsSuccess = data => dispatch(receiveSpotReviews(data));
      fetchSpotReviews(action.spotId, requestSpotsSuccess);
      return next(action);
    case ReviewConstants.CREATE_SPOT_REVIEW:
      const receiveSpotSuccess = data => {
        action.success();
        dispatch(receiveSpotReview(data));
      };
      createSpotReview(action.review, receiveSpotSuccess);
      return next(action);

    // User Reviews
    case ReviewConstants.REQUEST_USER_REVIEWS:
      const requestUsersSuccess = data => dispatch(receiveUserReviews(data));
      fetchUserReviews(action.userId, requestUsersSuccess);
      return next(action);
    case ReviewConstants.CREATE_USER_REVIEW:
      const receiveUserSuccess = data => dispatch(receiveUserReview(data));
      createUserReview(action.review, receiveUserSuccess);
      return next(action);
    default:
      return next(action);
  }
};
