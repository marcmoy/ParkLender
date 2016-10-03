import React from 'react';
import PriceType from './filters/price_type';
import PriceRange from './filters/price_range';

const FilterForm = ({ updateFilter }) => (
  <form className='filter-form-container'>
    <div className='form-group'>
      <PriceType updateFilter={ updateFilter } />
    </div>
    <PriceRange updateFilter={ updateFilter } />
  </form>
);

export default FilterForm;
