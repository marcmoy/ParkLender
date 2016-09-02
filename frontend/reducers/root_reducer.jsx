import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FilterReducer from './filter_reducer';
import SpotsReducer from './spots_reducer';
import MapReducer from './map_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  filter: FilterReducer,
  spots: SpotsReducer,
  mapOpts: MapReducer
});

export default RootReducer;
