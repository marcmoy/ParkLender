const React = require('react');
import PriceType from './input_fields/price_type';

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({filter, updateFilter, updateMap}) => (
  <div className='filter-form-container'>

    <input type="text" id="autocomplete-search-field" placeholder="Where to?" />

    <PriceType filter={filter} updateFilter={updateFilter}
      handleChange={handleChange} />

    <div className='date-filter'>
      Date
      <input type="text" placeholder="Check In" />
      <input type="text" placeholder="Check Out" />
    </div>
    <div className='time-filter'>
      Time
      <input type="text" placeholder="Start Time" />
      <input type="text" placeholder="Start Time" />
    </div>
  </div>
);

export default FilterForm;
