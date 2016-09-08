export const fetchSpotReviews = (spotId, success) => {
  $.ajax({
    method: 'GET',
    url: `api/spots/${spotId}/reviews`,
    dataType: 'json',
    success
  });
};

export const createSpotReview = (review, success) => {
  let spotId = review.spotId;
  $.ajax({
    method: 'POST',
    url: `api/spots/${spotId}/reviews`,
    data: review,
    dataType: 'json',
    success
  });
};

export const fetchUserReviews = (userId, success) => {
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/reviews`,
    dataType: 'json',
    success
  });
};

export const createUserReview = (review, success) => {
  let userId = review.userId;
  $.ajax({
    method: 'POST',
    url: `api/users/${userId}/reviews`,
    data: review,
    dataType: 'json',
    success
  });
};
