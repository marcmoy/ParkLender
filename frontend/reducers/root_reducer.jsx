import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FilterReducer from './filter_reducer';
import SpotsReducer from './spots_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  filter: FilterReducer,
  spots: SpotsReducer
});

export default RootReducer;
