const React = require('react');
import PriceType from './input_fields/price_type';
import DateRange from './input_fields/date_range';
import TimeRange from './input_fields/time_range';
import DateField from 'react-date-picker';

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({filter, updateFilter, updateMap}) => (
  <div className='filter-form-container'>

    <input type="text" id="autocomplete-search-field" placeholder="Where to?" />

    <PriceType filter={filter} updateFilter={updateFilter}
      handleChange={handleChange} />

    <div className='time-filter'>
    </div>
  </div>
);

export default FilterForm;
