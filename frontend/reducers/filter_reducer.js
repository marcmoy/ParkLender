import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  bounds: {}
});

const FilterReducer = function(state = _defaultFilters, action){
  if (action.type === FilterConstants.UPDATE_FILTER){
    const newFilter = {[action.filter]: action.value};
    let newState = merge({}, state, newFilter);
    if (action.filter === 'prices') newState[action.filter] = action.value;
    return newState;
  } else {
    return state;
  }
};

export default FilterReducer;
