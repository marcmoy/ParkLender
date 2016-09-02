import React from 'react';
import MapContainer from '../map/map_container';
import SpotIndex from '../spot/spot_index';
import FilterForm from '../filter/form';

const Search = ({ spots, mapOpts, filter, updateFilter, updateMap}) => {

  return(
    <div>
      <div className="search-results-container">
        <FilterForm
          filter={filter}
          updateFilter={updateFilter}
          updateMap={updateMap} />
        <SpotIndex spots={spots} />
      </div>
      <div className="map-container">
        <MapContainer
          spots={spots}
          updateFilter={updateFilter}
          mapOpts={mapOpts}/>
      </div>
    </div>
  );
};

export default Search;
