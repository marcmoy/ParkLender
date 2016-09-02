import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';
import WhereTo from '../where_to/where_to';

class SpotMap extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('here');
    const map = document.getElementById('map');
    this.map = new google.maps.Map(map, this.props.mapOpts);
    this.markers = new MarkerManager(this.map);
    this._bindBoundsListener();
    console.log(this.map);
  }

  componentDidUpdate(){
    this.markers.updateMarkers(this.props.spots);
  }

  _bindBoundsListener() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
  }

  render() {
    return (
      <div className="map" id="map">
        <WhereTo map={this.map} updateMap={this.props.updateMap} />
      </div>
    );
  }
}

export default SpotMap;
