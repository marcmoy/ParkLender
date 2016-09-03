export const WHERE_TO_CONSTANTS = {
  OPEN: "OPEN",
  CLOSE: "CLOSE"
};

export const openWhereTo = () => ({
  type: WHERE_TO_CONSTANTS.OPEN
  // whereTo: true
});

export const closeWhereTo = () => ({
  type: WHERE_TO_CONSTANTS.CLOSE
  // whereTo: false
});
