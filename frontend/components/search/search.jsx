import React from 'react';
import SpotMap from '../map/spot_map';
import SpotIndex from '../spot/spot_index';

const Search = ({ spots, updateFilter}) => {
  return(
    <div>
      <div className="map-container">
        <SpotMap spots={spots} updateFilter={updateFilter}/>
        <SpotIndex spots={spots} />
      </div>
    </div>
  );
};

export default Search;
