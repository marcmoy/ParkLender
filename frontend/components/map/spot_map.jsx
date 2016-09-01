import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const mapDefault = {
  center: { lat: 37.7758, lng: -122.435 }, // center of SF
  zoom: 20
};

class SpotMap extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, mapDefault);
    this.markers = new MarkerManager(this.map);
    this._bindBoundsListener();
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
    return <div className="map" ref="map"></div>;
  }
}

export default SpotMap;
