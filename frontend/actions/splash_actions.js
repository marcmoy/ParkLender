export const SPLASH_CONSTANTS = {
  SPLASH_ON: "SPLASH_ON",
  SPLASH_OFF: "SPLASH_OFF"
};

export const splashOn = () => ({
  type: SPLASH_CONSTANTS.SPLASH_ON
});

export const splashOff = () => ({
  type: SPLASH_CONSTANTS.SPLASH_OFF
});
