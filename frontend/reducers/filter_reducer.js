import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  bounds: {}
});

const FilterReducer = function(state = _defaultFilters, action){
  if (action.type === FilterConstants.UPDATE_FILTER){
    const newFilter = {[action.filter]: action.value};
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default FilterReducer;
