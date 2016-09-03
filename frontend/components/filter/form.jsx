const React = require('react');
import PriceType from './input_fields/price_type';
import DateRange from './input_fields/date_range';
import TimeRange from './input_fields/time_range';
import DateField from 'react-date-picker';

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({filter, updateFilter, updateMap}) => (
  <form className='filter-form-container'>

    <PriceType filter={filter} updateFilter={updateFilter}
      handleChange={handleChange} />

    <div className='time-filter'>
    </div>
    
  </form>
);

export default FilterForm;
