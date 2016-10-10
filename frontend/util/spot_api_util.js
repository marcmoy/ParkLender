export const fetchSpots = (filter, success) => {
  $.ajax({
    method: 'GET',
    url: 'api/spots',
    data: filter,
    dataType: 'json',
    success
  });
};

export const fetchSpot = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `api/spots/${id}`,
    success
  });
};

export const createReview = (review, success) => {
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: review,
    dataType: 'json',
    success
  });
};

export const createSpot = (listing, success, error) => {
  let spot = { spot: listing };
  $.ajax({
    method: 'POST',
    url: `api/users/${listing.host_id}/spots`,
    data: spot,
    dataType: 'json',
    success,
    error
  });
};
