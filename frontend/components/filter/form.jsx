const React = require('react');
import PriceType from './filters/price_type';
import PriceRange from './filters/price_range';
// import DateInput from './input_fields/date_input';
// import TimeRange from './input_fields/time_range';

// const handleChange = (filter, updateFilter) => (
//   e => updateFilter(filter, e.currentTarget.value)
// );

// <DateInput filter={filter} updateFilter={updateFilter} />

const FilterForm = ({ updateFilter }) => (
  <form className='filter-form-container'>
    <div className='form-group'>
      <PriceType updateFilter={ updateFilter } />
    </div>
    <PriceRange updateFilter={ updateFilter } />
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
