const React = require('react');
import PriceType from './input_fields/price_type';
import DateInput from './input_fields/date_input';
import TimeRange from './input_fields/time_range';

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({filter, updateFilter, updateMap}) => (
  <form className='filter-form-container'>
    <div className='form-group'>
      <PriceType filter={filter} updateFilter={updateFilter} />
      <DateInput filter={filter} updateFilter={updateFilter} />
    </div>
  </form>
);

export default FilterForm;

// <button className="button">
//   <a href="#filters" data-toggle="collapse">
//     Filters
//   </a>
// </button>

// <div id="filters" className="collapse">
// </div>
