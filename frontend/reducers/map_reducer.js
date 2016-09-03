import { MapConstants } from '../actions/map_actions';
import merge from 'lodash/merge';

const mapDefault = {
  center: { lat: 37.7758, lng: -122.435 }, // center of SF
  zoom: 13
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
