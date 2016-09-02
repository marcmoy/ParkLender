import React from 'react';
import SpotMap from '../map/spot_map';
import SpotIndex from '../spot/spot_index';
import FilterForm from '../filter/form';

const SearchPage = ({ spots, mapOpts, filter, updateFilter, updateMap}) => {

  return(
    <div className="search-page-container">
      <div className="search-results-container">
        <FilterForm filter={filter} updateFilter={updateFilter} />
        <SpotIndex spots={spots} />
      </div>
      <div className="map-container">
        <SpotMap spots={spots} updateFilter={updateFilter}
          mapOpts={mapOpts} updateMap={updateMap} />
      </div>
    </div>
  );
};

export default SearchPage;
