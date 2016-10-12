import { MapConstants } from '../actions/map_actions';
import merge from 'lodash/merge';

const mapDefault = {
  center: {
    lat: 37.75243528806485,
    lng: -122.45554447174072 }, // center of SF
  zoom: 12,
  clickableIcons: false,
  disableDefaultUI: true, // a way to quickly hide all controls
  mapTypeControl: false
};

const MapReducer = function(state = mapDefault, action){
  switch (action.type) {
    case MapConstants.UPDATE_MAP:

      const newMapOptions = {
        center: action.center,
        zoom: action.zoom
      };

      return merge({}, state, newMapOptions);
    default:
      return state;
  }
};

export default MapReducer;
