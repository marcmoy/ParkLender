import React from 'react';
import SpotMap from '../map/spot_map';
import SpotIndex from '../spot/spot_index';

const Search = ({ spots, updateFilter}) => {
  return(
    <div>
      <div className="map-container">
        <SpotMap spots={spots} updateFilter={updateFilter}/>
      </div>
    </div>
  );
};

export default Search;

// <div className="spots-index-container">
//   <SpotIndex spots={spots} />
// </div>
