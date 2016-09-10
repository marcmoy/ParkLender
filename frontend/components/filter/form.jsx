const React = require('react');
import PriceType from './input_fields/price_type';
import DateInput from './input_fields/date_input';
import TimeRange from './input_fields/time_range';
import Rheostat from 'rheostat';

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);

// <DateInput filter={filter} updateFilter={updateFilter} />

const FilterForm = ({filter, updateFilter, updateMap}) => (
  <form className='filter-form-container'>
    <div className='form-group'>
      <PriceType filter={filter} updateFilter={updateFilter} />
    </div>
    <div className='form-group'>
      <div className='row rheostat-row'>
        <Rheostat min={1} max={100} values={[1,100]} />
      </div>
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
