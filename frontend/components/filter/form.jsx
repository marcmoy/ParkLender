const React = require('react');

const _handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({minSeating, maxSeating, updateFilter}) => (
  <div className='filter-form-container'>
    <input type="text" placeholder="Where to?" />
    <div className='price-buttons'>
      Length of Stay
      Hourly <input type="radio" />
      Daily<input type="radio" />
      Monthly<input type="radio" />
    </div>
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
