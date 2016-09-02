export const MapConstants = {
  UPDATE_MAP: "UPDATE_MAP"
};

export const updateMap = (center, zoom = 13) => ({
  type: MapConstants.UPDATE_MAP,
  center,
  zoom
});
