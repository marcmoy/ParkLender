import { ReviewConstants } from '../actions/review_actions';
import { merge, isEmpty } from 'lodash';
import { removeSpinner, addEmptyMessage } from '../util/loader';

const ReviewsReducer = function(state = {}, action){
  switch(action.type){
    // SPOT REVIEWS
    case ReviewConstants.RECEIVE_SPOT_REVIEWS:
      return action.reviews;
    case ReviewConstants.RECEIVE_SPOT_REVIEW:
      const newSpotReview = {[action.review.id]: action.review};
      return merge({}, state, newSpotReview);
    // USER REVIEWS
    case ReviewConstants.RECEIVE_USER_REVIEWS:
      return action.reviews;
    case ReviewConstants.RECEIVE_USER_REVIEW:
      const newUserReview = {[action.review.id]: action.review};
      return merge({}, state, newUserReview);
    default:
      return state;
  }
};

export default ReviewsReducer;
