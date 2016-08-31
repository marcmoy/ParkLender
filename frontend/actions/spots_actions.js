export const SpotConstants = {
  RECEIVE_SPOTS: "RECEIVE_SPOTS",
  RECEIVE_SPOT: "RECEIVE_SPOT",
  REQUEST_SPOTS: "REQUEST_SPOTS",
  REQUEST_SPOT: "REQUEST_SPOT",
  CREATE_SPOT: "CREATE_SPOT",
  CREATE_REVIEW: "CREATE_REVIEW"
};

export const requestSpots = () => ({
  type: SpotConstants.REQUEST_SPOTS
});

export const requestSpot = id => ({
  type: SpotConstants.REQUEST_SPOT,
  id
});

export const receiveSpots = spots => ({
  type: SpotConstants.RECEIVE_SPOTS,
  spots
});

export const receiveSpot = spot => ({
  type: SpotConstants.RECEIVE_SPOT,
  spot
});

export const createSpot = spot => ({
  type: SpotConstants.CREATE_SPOT,
  spot
});

// export const createReview = review => ({
//   type: SpotConstants.CREATE_REVIEW,
//   review
// });
