export const ReviewConstants = {
  // spot reviews
  CREATE_SPOT_REVIEW: "CREATE_SPOT_REVIEW",
  REQUEST_SPOT_REVIEWS: "REQUEST_SPOT_REVIEWS",
  RECEIVE_SPOT_REVIEWS: "RECEIVE_SPOT_REVIEWS",
  RECEIVE_SPOT_REVIEW: "RECEIVE_SPOT_REVIEW",
  // user reviews
  CREATE_USER_REVIEW: "CREATE_USER_REVIEW",
  REQUEST_USER_REVIEWS: "REQUEST_USER_REVIEWS",
  RECEIVE_USER_REVIEWS: "RECEIVE_USER_REVIEWS",
  RECEIVE_USER_REVIEW: "RECEIVE_USER_REVIEW"
};

// SPOT REVIEwS
export const requestSpotReviews = spotId => ({
  type: ReviewConstants.REQUEST_SPOT_REVIEWS,
  spotId
});

export const receiveSpotReviews = reviews => ({
  type: ReviewConstants.RECEIVE_SPOT_REVIEWS,
  reviews
});

export const createSpotReview = (review, success) => ({
  type: ReviewConstants.CREATE_SPOT_REVIEW,
  review,
  success
});

export const receiveSpotReview = review => ({
  type: ReviewConstants.RECEIVE_SPOT_REVIEW,
  review
});

// USER REVIEwS
export const requestUserReviews = userId => ({
  type: ReviewConstants.REQUEST_USER_REVIEWS,
  userId
});

export const receiveUserReviews = reviews => ({
  type: ReviewConstants.RECEIVE_USER_REVIEWS,
  reviews
});

export const createUserReview = review => ({
  type: ReviewConstants.CREATE_USER_REVIEW,
  review
});

export const receiveUserReview = review => ({
  type: ReviewConstants.RECEIVE_USER_REVIEW,
  review
});
