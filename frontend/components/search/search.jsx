import React from 'react';
import SpotMap from '../map/spot_map';
import SpotIndex from '../spot/spot_index';
import FilterForm from '../filter/form';

const Search = ({ spots, filter, updateFilter}) => {

  return(
    <div>
      <div className="search-results-container">
        <FilterForm updateFilter={updateFilter} filter={filter} />
        <SpotIndex spots={spots} />
      </div>
      <div className="map-container">
        <SpotMap spots={spots} updateFilter={updateFilter}/>
      </div>
    </div>
  );
};

export default Search;
