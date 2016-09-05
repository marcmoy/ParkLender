import React from 'react';
import SpotMap from '../map/spot_map';
import SpotIndex from '../spot/spot_index';
import FilterForm from '../filter/form';

const SearchPage = ({ spots, mapOpts, filter, updateFilter, updateMap}) => {

  return(
    <div className="map-search">
      <div className="sidebar">
        <div className="load-message" />
        <FilterForm filter={filter} updateFilter={updateFilter} />
        <SpotIndex spots={spots} />
      </div>
      <SpotMap spots={spots} updateFilter={updateFilter}
        mapOpts={mapOpts} updateMap={updateMap} />
    </div>
  );
};

export default SearchPage;
