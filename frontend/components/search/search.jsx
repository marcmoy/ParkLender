import React from 'react';
import SpotMap from '../map/spot_map';
import SpotIndex from './spots_index';

const Search = ({ spots, updateBounds}) => {
  return(
    <div>
      <SpotMap spots={spots} updateBounds={updateBounds}/>
      <SpotIndex spots={spots} />
    </div>
  );
};

export default Search;
