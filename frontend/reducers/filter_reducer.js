import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  bounds: {}
});

const FiltersReducer = function(state = _defaultFilters, action){
  if (action.type === FilterConstants.UPDATE_FILTER){
    const newFilter = {[action.filter]: action.value};
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};
