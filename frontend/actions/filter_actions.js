export const FilterConstants = {
  UPDATE_FILTER: "UPDATE_FILTER"
};

export const updateFilter = (filter, value) => ({
  type: FilterConstants.UPDATE_FILTER,
  filter,
  value
});
