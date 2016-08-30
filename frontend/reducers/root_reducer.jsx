import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FilterReducer from './filter_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  filter: FilterReducer
});

export default RootReducer;
